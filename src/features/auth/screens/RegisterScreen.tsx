"use client";

import type React from "react";

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
import { Mail, User, Phone, Lock } from "lucide-react";
import { Form, Formik } from "formik";
import { loginSchema } from "../validations";
import { RegisterFormValues } from "../auth.types";
import FormikInput from "@/components/formik/FormikInput";
import { useRouter } from "next/navigation";
import useRegister from "../hooks/useRegister";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const initialValues: RegisterFormValues = {
  email: "",
  firstName: "",
  firstLastName: "",
  secondLastName: "",
  mobilePhone: "",
  landlinePhone: null,
  password: "",
  confirmPassword: "",
};

export default function RegisterScreen() {
  const router = useRouter();

  const { register, error, isLoading } = useRegister();

  return (
    <>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-2xl bg-white dark:bg-gray-800">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Crea Tu Cuenta
          </CardTitle>

          <CardDescription className="text-center">
            Completa tus datos para registrarte en la plataforma
          </CardDescription>
        </CardHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={register}
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
                label="Correo Electrónico"
                type="email"
                icon={<Mail className="h-4 w-4 text-gray-400" />}
                placeholder="tu@ejemplo.com"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormikInput
                  name="firstName"
                  label="Nombre"
                  icon={<User className="h-4 w-4 text-gray-400" />}
                  placeholder="Juan"
                  required
                />
                <FormikInput
                  name="firstLastName"
                  label="Primer Apellido"
                  icon={<User className="h-4 w-4 text-gray-400" />}
                  placeholder="Pérez"
                  required
                />
              </div>

              <FormikInput
                name="secondLastName"
                label="Segundo Apellido"
                icon={<User className="h-4 w-4 text-gray-400" />}
                placeholder="García"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormikInput
                  name="mobilePhone"
                  label="Teléfono Móvil"
                  type="text"
                  icon={<Phone className="h-4 w-4 text-gray-400" />}
                  placeholder="+34 600 123 456"
                  required
                />
                <FormikInput
                  name="landlinePhone"
                  label="Teléfono Fijo"
                  type="text"
                  icon={<Phone className="h-4 w-4 text-gray-400" />}
                  placeholder="+34 928 88 88 88"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormikInput
                  name="password"
                  label="Contraseña"
                  type="password"
                  icon={<Lock className="h-4 w-4 text-gray-400" />}
                  toggleVisibility
                  placeholder="••••••••"
                  required
                />
                <FormikInput
                  name="confirmPassword"
                  label="Confirmar Contraseña"
                  type="password"
                  icon={<Lock className="h-4 w-4 text-gray-400" />}
                  toggleVisibility
                  placeholder="••••••••"
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 mt-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
              </Button>
              <div className="text-center text-sm text-gray-600">
                ¿Tienes una cuenta?
                <Button
                  variant="link"
                  className="px-0 text-sm"
                  type="button"
                  onClick={() => router.push("/login")}
                  style={{ marginLeft: "0.25rem" }}
                >
                  Inicia sesión aquí
                </Button>
              </div>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </>
  );
}
