import { useAuth } from "@/context/AuthContext";
import { cocheService } from "@/services/cochesService";
import { Coche } from "@/types/coche";
import { useEffect, useState } from "react";

export default function useCoches() {
  const { user } = useAuth();
  const [coches, setCoches] = useState<Coche[]>([]);
  const [loadingCoches, setLoadingCoches] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoadingCoches(true);
    setError(null);
    if (!user) return;

    const fetchCoches = async () => {
      try {
        const response = await cocheService.getAll();
        if (response.ok) {
          setCoches(response.data!);
        } else {
          setError(response.error || "Error fetching coches");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching coches");
      } finally {
        setLoadingCoches(false);
      }
    };

    fetchCoches();
  }, [user]);

  return { coches, loadingCoches, error };
}
