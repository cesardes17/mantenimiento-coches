"use client";

import { Button } from "@/components/ui/button";
import { AuthService } from "@/lib/services/core/authService";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleLogout = async () => {
    await AuthService.logout();
    router.push("/");
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Bienvenido a la página principal</h1>
      <p className="mb-4">Has iniciado sesión correctamente.</p>

      <Button onClick={handleLogout}>Desloguearte</Button>
    </div>
  );
}
