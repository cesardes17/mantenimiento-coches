import { rolesService } from "@/services/rolesService";
import { Rol } from "@/types/rol";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useActualizarRol() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const actualizarRol = async (rol: Rol) => {
    setLoading(true);
    setError(null);
    try {
      const response = await rolesService.update(rol.id, rol);
      if (!response.ok) {
        throw new Error(response.error || "Error al actualizar el rol");
      }
      return response.data;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Un error inesperado ocurrió al actualizar el rol"
      );
    } finally {
      setLoading(false);
      router.back(); // Navigate back after updating
    }
  };

  return { actualizarRol, loading, error };
}
