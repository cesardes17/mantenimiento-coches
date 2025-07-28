// src/app/roles/nuevo/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import useCrearRol from "../hooks/useCrearRol";
import { Rol } from "@/types/rol";
import RolForm from "../components/RolForm";
import ContentLayout from "@/components/layout/ContentLayout";

export default function NuevoRolScreen() {
  const { crearRol } = useCrearRol();

  const handleSubmit = (values: Rol) => {
    crearRol(values);
  };

  const initialValues: Rol = {
    id: 0,
    nombre: "",
    descripcion: "",
  };

  return (
    <ContentLayout centerVertically>
      <Card className="w-full max-w-md bg-gray-50 dark:bg-gray-900 border shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Crear Nuevo Rol</CardTitle>
        </CardHeader>
        <CardContent>
          <RolForm initialValues={initialValues} onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
