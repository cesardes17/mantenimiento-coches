import { useState } from "react";
import { LoginFormValues } from "../auth.types";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async (values: LoginFormValues) => {
    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Navigate to home on success
      router.push("/home");
    } catch (err) {
      console.error("Login error:", err);
      setError("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
}
