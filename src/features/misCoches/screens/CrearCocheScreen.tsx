"use client";

import ContentLayout from "@/components/layout/ContentLayout";
import CocheForm from "../components/CocheForm";
import { Coche } from "@/types/coche";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";

export default function CrearCocheScreen() {
  const initialValues: Coche = {
    id: 0,
    matricula: "",
    marca: "",
    modelo: "",
    color: "",
    anio_compra: new Date().getFullYear(),
    combustible_id: 0,
    odometro: 0,
    fecha_registro: "",
    imagen_url: "",
  };

  const handleSubmit = (values: Coche) => {
    console.log("Coche creado:", values);
  };

  return (
    <ContentLayout centerVertically>
      <Card className="w-full max-w-md bg-gray-50 dark:bg-gray-900 border shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Crear Nuevo Coche</CardTitle>
        </CardHeader>
        <CardContent>
          <CocheForm initialValues={initialValues} onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
