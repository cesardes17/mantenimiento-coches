"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShieldX } from "lucide-react";

export default function AccessDenied() {
  const router = useRouter();

  const handleGoLandingPage = () => {
    router.replace("/misCoches/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="flex justify-center">
          <ShieldX className="h-24 w-24 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">
            Acceso denegado
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            No tienes permisos para ver esta página.
          </p>
        </div>

        <Button onClick={handleGoLandingPage} className="mt-6" size="lg">
          Volver a la página principal
        </Button>
      </div>
    </div>
  );
}
