"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MisCochesHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Search Input */}
      <div className="relative flex-1 lg:max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar coche..."
          className="pl-10 bg-background text-foreground"
        />
      </div>

      {/* New Car Button */}
      <Button className="" onClick={() => router.push("/misCoches/nuevo")}>
        <Plus className="mr-2 h-4 w-4" />
        Nuevo coche
      </Button>
    </div>
  );
}
