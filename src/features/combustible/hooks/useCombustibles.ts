import { combustibleService } from "@/services/combustibleService";
import { Combustible } from "@/types/combustible";
import { useEffect, useState } from "react";

export default function useCombustibles() {
  const [combustibles, setCombustibles] = useState<Combustible[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCombustibles = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await combustibleService.getAll();
        if (response.ok) {
          setCombustibles(response.data!);
        } else {
          setError(response.error || "Error al cargar los combustibles");
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error al cargar los combustibles"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchCombustibles();
  }, []);

  const deleteCombustible = async (id: number) => {
    setLoading(true);
    setError(null);
    const response = await combustibleService.delete(id);
    if (response.ok) {
      setCombustibles((prev) => prev.filter((c) => c.id !== id));
      setLoading(false);
    } else {
      setError(response.error || "Error al eliminar el combustible");
      setLoading(false);
    }
  };

  return {
    combustibles,
    loading,
    error,
    deleteCombustible,
  };
}
