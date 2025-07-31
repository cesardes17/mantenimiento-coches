import { combustibleService } from "@/services/combustibleService";
import { Combustible } from "@/types/combustible";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useActualizarCombustible() {
  const [loadingActualizar, setLoadingActualizar] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const actualizarCombustible = async (combustible: Combustible) => {
    setLoadingActualizar(true);
    setError(null);
    try {
      const response = await combustibleService.update(
        combustible.id,
        combustible
      );
      if (!response.ok) {
        throw new Error(response.error || "Error al actualizar el combustible");
      }
      return response.data;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Un error inesperado ocurrió al actualizar el combustible"
      );
    } finally {
      setLoadingActualizar(false);
      router.back(); // Navigate back after updating
    }
  };

  return { actualizarCombustible, loadingActualizar, error };
}
