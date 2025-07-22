import { useState } from "react";
import { LoginFormValues } from "../auth.types";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";

export default function useLogin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async (values: LoginFormValues) => {
    setIsLoading(true);
    setError("");

    try {
      const res = await authService.login(values);
      if (res.ok) {
        router.push("/home/");
      } else {
        setError("Credenciales inválidas");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
}
