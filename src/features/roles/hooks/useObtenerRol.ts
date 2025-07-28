import { rolesService } from "@/services/rolesService";
import { Rol } from "@/types/rol";
import { useEffect, useState } from "react";

interface Props {
  id: number;
}

export default function useObtenerRol({ id }: Props) {
  const [rol, setRol] = useState<Rol | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRol = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await rolesService.getById(id);
        if (response.ok) {
          setRol(response.data!);
        } else {
          throw new Error(response.error || "Error al obtener el rol");
        }
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Error inesperado al obtener el rol"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRol();
  }, [id]);

  return { rol, loading, error };
}
