// src/components/roles/RolForm.tsx
"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import FormikInput from "@/components/formik/FormikInput";
import FormikTextarea from "@/components/formik/FormikTextArea";
import { Combustible } from "@/types/combustible";

interface Props {
  initialValues: Combustible;
  onSubmit: (values: Combustible) => void;
  isEditing?: boolean;
}

const validationSchema = Yup.object({
  id: Yup.number()
    .typeError("Debe ser un número")
    .integer("Debe ser un número entero")
    .min(1, "Debe ser mayor a 0")
    .required("El ID es obligatorio"),
  tipo: Yup.string().required("El tipo es obligatorio"),
  descripcion: Yup.string().required("La descripción es obligatoria"),
});

export default function CombustibleForm({
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
            name="tipo"
            label="Tipo"
            required
            placeholder="Ingrese el tipo de combustible"
          />

          <FormikTextarea
            name="descripcion"
            label="Descripción"
            placeholder="Ingrese la descripción del combustible"
          />

          <Button type="submit" className="w-full">
            {isEditing ? "Actualizar" : "Guardar"}
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
