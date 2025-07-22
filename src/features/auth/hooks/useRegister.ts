import { useState } from "react";
import { RegisterFormValues } from "../auth.types";

import { Usuario } from "@/types/usuario";

import { useRouter } from "next/navigation";

export default function useRegister() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const register = async (values: RegisterFormValues) => {
    setIsLoading(true);
    setError(null);
  };

  return { register, error, isLoading };
}
