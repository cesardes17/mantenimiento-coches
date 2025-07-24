import { rolesService } from "@/services/rolesService";
import { Rol } from "@/types/rol";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useCrearRol() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const crearRol = async (rol: Rol) => {
    setLoading(true);
    setError("");
    const response = await rolesService.create(rol);
    if (response.ok) {
      setLoading(false);
      setError("");
      router.back();
    } else {
      console.warn(response.error);
      setError(response.error!);
      setLoading(false);
    }
  };

  return {
    crearRol,
    loading,
    error,
  };
}
