"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { Rol } from "@/types/rol";

interface RoleTableRowProps {
  role: Rol;
  onEdit: (role: Rol) => void;
  onDelete: (role: Rol) => void;
}

export function RoleTableRow({ role, onEdit, onDelete }: RoleTableRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{role.id}</TableCell>
      <TableCell>{role.nombre}</TableCell>
      <TableCell className="max-w-xs truncate">{role.descripcion}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(role)}
            className="h-8 w-8 p-0"
          >
            <Edit className="h-4 w-4" />
            <span className="sr-only">Editar rol {role.nombre}</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete(role)}
            className="h-8 w-8 p-0 text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Eliminar rol {role.nombre}</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
