"use client";

import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormikInput from "@/components/formik/FormikInput";
import FormikTextarea from "@/components/formik/FormikTextArea";
import useCrearRol from "../hooks/useCrearRol";
import { Rol } from "@/types/rol";

const validationSchema = Yup.object({
  id: Yup.number()
    .typeError("Debe ser un número")
    .integer("Debe ser un número entero")
    .min(1, "Debe ser mayor a 0")
    .required("El ID es obligatorio"),
  nombre: Yup.string().required("El nombre es obligatorio"),
  descripcion: Yup.string().required("La descripción es obligatoria"),
});

export default function NuevoRolScreen() {
  const { crearRol, loading, error } = useCrearRol();
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
            Crear Nuevo Rol
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{
              id: 0,
              nombre: "",
              descripcion: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Datos enviados:", values);
              const nuevoRol: Rol = {
                id: values.id,
                nombre: values.nombre,
                descripcion: values.descripcion,
              };
              crearRol(nuevoRol);
            }}
          >
            <Form className="space-y-6">
              <FormikInput
                name="id"
                label="ID"
                type="number"
                required
                placeholder="Ingrese el ID"
              />

              <FormikInput
                name="nombre"
                label="Nombre"
                required
                placeholder="Ingrese el nombre del rol"
              />

              <FormikTextarea
                name="descripcion"
                label="Descripción"
                placeholder="Ingrese la descripción del rol"
              />

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Guardar
              </Button>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
