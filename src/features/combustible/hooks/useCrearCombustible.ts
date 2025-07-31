import { combustibleService } from "@/services/combustibleService";
import { Combustible } from "@/types/combustible";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useCrearCombustible() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const crearCombustible = async (combustible: Combustible) => {
    setLoading(true);
    setError("");
    const response = await combustibleService.create(combustible);
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
    crearCombustible,
    loading,
    error,
  };
}
