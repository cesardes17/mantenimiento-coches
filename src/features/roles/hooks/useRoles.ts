import { rolesService } from "@/services/rolesService";
import { Rol } from "@/types/rol";
import { useEffect, useState } from "react";

export default function useRoles() {
  const [roles, setRoles] = useState<Rol[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRoles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await rolesService.getAll();
        if (response.ok) {
          //Si la respuesta es correcta, siempre va a venir acompañada de la propiedad data
          setRoles(response.data!);
        } else {
          // si no es correcta, se maneja el error
          console.error("Error fetching roles:", response.error);
        }
      } catch (error) {
        console.error("Error fetching roles:", error);
        setError("Failed to fetch roles");
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  //   const deleteRol = async () =>{

  //   }

  return { roles, error, loading };
}
