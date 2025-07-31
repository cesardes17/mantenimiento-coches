"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import useCombustibles from "../hooks/useCombustibles";
import CombustibleTableRow from "../components/combustible-table-row";
import { Combustible } from "@/types/combustible";
import { ConfirmationModal } from "@/components/shared/delete-confirmation-modal";
import ContentLayout from "@/components/layout/ContentLayout";
import { useRouter } from "next/navigation";

export default function CombustiblesScreen() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { combustibles, deleteCombustible } = useCombustibles();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [combustibleToDelete, setCombustibleToDelete] =
    useState<Combustible | null>(null);

  const router = useRouter();

  const filteredCombustibles = useMemo(() => {
    return combustibles.filter((combustible) =>
      combustible.tipo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [combustibles, searchTerm]);

  const handleNewCombustible = () => {
    router.push("/combustibles/nuevo");
  };

  const handleEditCombustible = (combustible: Combustible) => {
    // Logic to edit the combustible with the given ID
    router.push(`/combustibles/editar/${combustible.id}`);
  };

  const handleDeleteCombustible = (combustible: Combustible) => {
    setCombustibleToDelete(combustible);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!combustibleToDelete) return;
    await deleteCombustible(combustibleToDelete.id);
    setCombustibleToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setCombustibleToDelete(null);
  };

  return (
    <ContentLayout>
      <div className="w-full gap-4">
        <Card className=" bg-gray-50 dark:bg-gray-900 ">
          <CardHeader>
            <CardTitle>Gestión de Combustibles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Search Input */}
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar combustible..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              {/* New Combustible Button */}
              <Button
                onClick={handleNewCombustible}
                className="w-full sm:w-auto"
              >
                <Plus className="mr-2 h-4 w-4" />
                Nuevo combustible
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* Table Section */}
        <Card className="bg-gray-50 dark:bg-gray-900 px-2">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead className="w-24">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCombustibles.length > 0 ? (
                    filteredCombustibles.map((combustible) => (
                      <CombustibleTableRow
                        key={combustible.id}
                        combustible={combustible}
                        onEdit={handleEditCombustible}
                        onDelete={handleDeleteCombustible}
                      />
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-center py-8 text-muted-foreground"
                      >
                        {searchTerm
                          ? "No se encontraron roles"
                          : "No hay roles disponibles"}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        {/* Delete Confirmation Modal */}
        <ConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={cancelDelete}
          onConfirm={confirmDelete}
          title="Confirmar eliminación"
          description={`¿Estás seguro de que quieres eliminar el rol "${combustibleToDelete?.tipo}"? Esta acción no se puede deshacer.`}
          confirmText="Eliminar"
          cancelText="Cancelar"
          variant="destructive"
        />
      </div>
    </ContentLayout>
  );
}
