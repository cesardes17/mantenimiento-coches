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
  };

  return { login, isLoading, error };
}
