// src/app/roles/nuevo/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContentLayout from "@/components/layout/ContentLayout";
import { Combustible } from "@/types/combustible";
import useCrearCombustible from "../hooks/useCrearCombustible";
import Loading from "@/components/shared/Loading";
import CombustibleForm from "../components/CombustibleForm";

export default function NuevoCombustibleScreen() {
  const { crearCombustible, loading } = useCrearCombustible();

  const handleSubmit = (values: Combustible) => {
    console.log("Valores del formulario:", values);
    crearCombustible(values);
  };

  const initialValues: Combustible = {
    id: 0,
    tipo: "",
    descripcion: "",
  };

  if (loading) return <Loading loading />;

  return (
    <ContentLayout centerVertically>
      <Card className="w-full max-w-md bg-gray-50 dark:bg-gray-900 border shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Crear Nuevo Combusible</CardTitle>
        </CardHeader>
        <CardContent>
          <CombustibleForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
          />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
