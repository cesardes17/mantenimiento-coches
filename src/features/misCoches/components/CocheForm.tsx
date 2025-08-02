// src/components/coche/CocheForm.tsx
"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import FormikInput from "@/components/formik/FormikInput";
import { Coche } from "@/types/coche";
import FormikFileInput from "@/components/formik/FormikFileInput";

interface Props {
  initialValues: Coche;
  onSubmit: (values: Coche) => void;
  isEditing?: boolean;
}

// Esquema de validación con Yup
const validationSchema = Yup.object({
  matricula: Yup.string()
    .matches(/^[A-Z0-9-]+$/, "Solo letras, números y guiones")
    .required("La matrícula es obligatoria"),

  marca: Yup.string().required("La marca es obligatoria"),
  modelo: Yup.string().required("El modelo es obligatorio"),
  color: Yup.string().required("El color es obligatorio"),

  anio_compra: Yup.number()
    .typeError("Debe ser un número")
    .integer("Debe ser un año válido")
    .min(1900, "Año mínimo: 1900")
    .max(new Date().getFullYear(), "No puede ser mayor al año actual")
    .required("El año de compra es obligatorio"),

  combustible_id: Yup.number()
    .typeError("Debe ser un número")
    .integer("Debe ser un número entero")
    .min(1, "Debe ser mayor a 0")
    .required("El combustible es obligatorio"),

  odometro: Yup.number()
    .typeError("Debe ser un número")
    .integer("Debe ser un número entero")
    .min(0, "No puede ser negativo")
    .required("El odómetro es obligatorio"),

  fecha_registro: Yup.string().required("La fecha de registro es obligatoria"),

  imagen_url: Yup.string().nullable().optional(),
});

export default function CocheForm({
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
            name="matricula"
            label="Matrícula"
            required
            placeholder="Ingrese la matrícula"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormikInput
              name="marca"
              label="Marca"
              required
              placeholder="Ingrese la marca del coche"
            />
            <FormikInput
              name="modelo"
              label="Modelo"
              required
              placeholder="Ingrese el modelo del coche"
            />
          </div>
          <FormikInput
            name="color"
            label="Color"
            required
            placeholder="Ingrese el color del coche"
          />

          <FormikInput
            name="anio_compra"
            label="Año de compra"
            type="number"
            required
            placeholder="Ingrese el año de compra"
          />
          <FormikInput
            name="combustible_id"
            label="ID de combustible"
            type="number"
            required
            placeholder="Ingrese el ID del combustible"
          />
          <FormikInput
            name="odometro"
            label="Odómetro (km)"
            type="number"
            required
            placeholder="Ingrese el odómetro en km"
          />
          <FormikInput
            name="fecha_registro"
            label="Fecha de registro"
            type="date"
            required
            placeholder="Ingrese la fecha de registro"
          />
          <FormikFileInput
            name="file"
            label="Imagen del coche (opcional)"
            accept="image/*"
          />

          <Button type="submit" className="w-full">
            {isEditing ? "Actualizar" : "Guardar"}
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
