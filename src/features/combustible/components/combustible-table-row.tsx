import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Combustible } from "@/types/combustible";
import { Edit, Trash2 } from "lucide-react";

interface Props {
  combustible: Combustible;
  onEdit: (combustible: Combustible) => void;
  onDelete: (combustible: Combustible) => void;
}

export default function CombustibleTableRow({
  combustible,
  onEdit,
  onDelete,
}: Props) {
  return (
    <TableRow>
      <TableCell className="font-medium">{combustible.id}</TableCell>
      <TableCell>{combustible.tipo}</TableCell>
      <TableCell className="max-w-xs truncate">
        {combustible.descripcion}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(combustible)}
            className="h-8 w-8 p-0"
          >
            <Edit className="h-4 w-4" />
            <span className="sr-only">
              Editar combustible {combustible.tipo}
            </span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete(combustible)}
            className="h-8 w-8 p-0 text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">
              Eliminar combustible {combustible.tipo}
            </span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
