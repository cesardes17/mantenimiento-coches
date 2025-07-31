import { combustibleService } from "@/services/combustibleService";
import { Combustible } from "@/types/combustible";

import { useEffect, useState } from "react";

interface Props {
  id: number;
}

export default function useObtenerCombustible({ id }: Props) {
  const [combustible, setCombustible] = useState<Combustible | null>(null);
  const [loadingCombustible, setLoadingCombustible] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCombustible = async () => {
      setLoadingCombustible(true);
      setError(null);
      try {
        const response = await combustibleService.getById(id);
        if (response.ok) {
          setCombustible(response.data!);
        } else {
          throw new Error(response.error || "Error al obtener el rol");
        }
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Error inesperado al obtener el combustible"
        );
      } finally {
        setLoadingCombustible(false);
      }
    };

    fetchCombustible();
  }, [id]);

  return { combustible, loadingCombustible, error };
}
