// src/app/roles/editar/[id]/page.tsx

"use client";

import EditarRolScreen from "@/features/roles/screens/EditarRol";
import { useParams } from "next/navigation";

export default function EditarRolPage() {
  const params = useParams<{ id: string }>();

  console.log("ID from params:", params.id);
  return <EditarRolScreen id={params.id} />;
}
