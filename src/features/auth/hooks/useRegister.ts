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
      } else {
        if (response.data) {
          // si el registro es exitoso, guardamos su info en base de datos
          const userData: Usuario = {
            activo: true,
            email: values.email,
            nombre: values.firstName,
            fijo: values.landlinePhone,
            uid: response.data.uid,
            apellido_p: values.firstLastName,
            apellido_m: values.secondLastName,
            movil: values.mobilePhone,
            fecha_registro: new Date(),
            rol: 2, // rol 2 correspondiente a usuario normal
          };
          const res = await userService.createUser(userData);
          if (!res.ok && res.error) {
            setError(res.error);
          } else {
            // Registro exitoso
            console.log("Usuario registrado exitosamente:", userData);

            //redirigir a la pagina de inicio
            router.push("/home/");
          }
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return { register, error, isLoading };
}
