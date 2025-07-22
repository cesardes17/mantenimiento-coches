import { useState } from "react";
import { RegisterFormValues } from "../auth.types";

import { Usuario } from "@/types/usuario";

import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";

export default function useRegister() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const register = async (values: RegisterFormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.register(values);
      if (response.ok && response.data) {
        const user: Usuario = response.data;
        console.log("Usuario registrado:", user);
        router.push("/dashboard/home/");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Error al crear la cuenta");
    } finally {
      setIsLoading(false);
    }
  };

  return { register, error, isLoading };
}
