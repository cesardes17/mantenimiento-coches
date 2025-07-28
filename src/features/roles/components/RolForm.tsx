// src/components/roles/RolForm.tsx
"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import FormikInput from "@/components/formik/FormikInput";
import FormikTextarea from "@/components/formik/FormikTextArea";
import { Rol } from "@/types/rol";

interface Props {
  initialValues: Rol;
  onSubmit: (values: Rol) => void;
  isEditing?: boolean;
}

const validationSchema = Yup.object({
  id: Yup.number()
    .typeError("Debe ser un número")
    .integer("Debe ser un número entero")
    .min(1, "Debe ser mayor a 0")
    .required("El ID es obligatorio"),
  nombre: Yup.string().required("El nombre es obligatorio"),
  descripcion: Yup.string().required("La descripción es obligatoria"),
});

export default function RolForm({
  initialValues,
  onSubmit,
  isEditing = false,
}: Props) {
  return (
    <div className="space-y-6">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
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

          <Button type="submit" className="w-full">
            {isEditing ? "Actualizar" : "Guardar"}
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
