"use client";

import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import { Mail, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import FormikInput from "@/components/formik/FormikInput";
import { loginSchema } from "../validations";
import useLogin from "../hooks/useLogin";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export default function LoginScreen() {
  const router = useRouter();
  const { login, isLoading, error } = useLogin();

  return (
    <>
      <div className="absolute top-4 right-4 ">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md bg-white-50 dark:bg-gray-900">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Iniciar sesión
          </CardTitle>
          <CardDescription className="text-center">
            Ingresa tus credenciales para acceder a tu cuenta
          </CardDescription>
        </CardHeader>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={login}
        >
          <Form>
            <CardContent className="space-y-4 pb-0">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <FormikInput
                name="email"
                label="Correo electrónico"
                type="email"
                icon={<Mail />}
                placeholder="correo@ejemplo.com"
              />
              <FormikInput
                name="password"
                label="Contraseña"
                icon={<Lock />}
                toggleVisibility
                placeholder="••••••••"
              />
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 mt-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Button>
              <div className="text-center text-sm text-gray-600">
                ¿No tienes una cuenta?
                <Button
                  variant="link"
                  className="px-0 text-sm"
                  type="button"
                  onClick={() => router.push("/register")}
                  style={{ marginLeft: "0.25rem" }}
                >
                  Regístrate aquí
                </Button>
              </div>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </>
  );
}
