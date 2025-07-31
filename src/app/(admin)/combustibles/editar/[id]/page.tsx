// src/app/roles/editar/[id]/page.tsx

"use client";

import EditarCombustibleScreen from "@/features/combustible/screens/EditarCombustible";
import { useParams } from "next/navigation";

export default function EditarCombustiblePage() {
  const params = useParams<{ id: string }>();

  console.log("ID from params:", params.id);
  return <EditarCombustibleScreen id={params.id} />;
}
