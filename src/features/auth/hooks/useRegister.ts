import { useState } from "react";
import { RegisterFormValues } from "../auth.types";
import { AuthService } from "@/lib/services/core/authService";
import { Usuario } from "@/types/usuario.interface";
import { userService } from "@/lib/services/userService";
import { useRouter } from "next/navigation";

export default function useRegister() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const register = async (values: RegisterFormValues) => {
    setIsLoading(true);
    setError(null);

    // Registramos al usuario en supabase
    try {
      const response = await AuthService.register(
        values.email,
        values.password
      );
      if (!response.ok && response.error) {
        setError(response.error);
        setIsLoading(false);
        return;
      } else {
        if (response.data) {
          const userData: Usuario = {
            activo: true,
            email: values.email,
            nombre: values.firstName,
            uid: response.data.uid,
            apellido_p: values.firstLastName,
            apellido_m: values.secondLastName,
            fecha_registro: new Date(),
            rol_global_id: 1,
            movil: values.mobilePhone,
            fijo: values.landlinePhone,
          };
          const res = await userService.createUser(userData);
          if (!res.ok && res.error) {
            setError(res.error);
            setIsLoading(false);
          } else {
            // Registro exitoso
            console.log("Usuario registrado exitosamente:", userData);

            //redirigir a la pagina de inicio
            router.push("/home/");
            setIsLoading(false);
            setError(null);
          }
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("Error al registrar el usuario. Por favor, inténtalo de nuevo.");
      setIsLoading(false);
    }
  };

  return { register, error, isLoading };
}
