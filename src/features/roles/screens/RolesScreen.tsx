"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { Rol } from "@/types/rol";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Table as TableIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RoleTableRow } from "../components/role-table-row";
import { ConfirmationModal } from "@/components/shared/delete-confirmation-modal";

import useRoles from "../hooks/useRoles";

export default function RolesScreen() {
  const { user } = useAuth();
  const router = useRouter();

  const { roles, loading, error } = useRoles();

  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState<Rol | null>(null);

  console.log("Roles:", roles);

  // Filter roles based on search term
  const filteredRoles = useMemo(() => {
    if (!searchTerm) return roles;

    return roles.filter(
      (role) =>
        role.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [roles, searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user || user.rol_global_id !== 2) {
    router.push("/accesoDenegado");
  }

  const handleNewRole = () => {
    // TODO: Implement new role creation
    console.log("Crear nuevo rol");
    router.push("/roles/nuevo/");
  };

  const handleEditRole = (role: Rol) => {
    // TODO: Implement role editing
    console.log("Editar rol:", role);
  };

  const handleDeleteRole = (role: Rol) => {
    setRoleToDelete(role);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    console.log("Eliminando el rol...: ", roleToDelete);
    setIsDeleteModalOpen(false);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setRoleToDelete(null);
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header Section */}
        <Card className=" bg-gray-50 dark:bg-gray-900">
          <CardHeader>
            <CardTitle>Gestión de Roles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Search Input */}
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar rol..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              {/* New Role Button */}
              <Button onClick={handleNewRole} className="w-full sm:w-auto">
                <Plus className="mr-2 h-4 w-4" />
                Nuevo rol
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Table Section */}
        <Card className="bg-gray-50 dark:bg-gray-900">
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
                  {filteredRoles.length > 0 ? (
                    filteredRoles.map((role: Rol) => (
                      <RoleTableRow
                        key={role.id}
                        role={role}
                        onEdit={handleEditRole}
                        onDelete={handleDeleteRole}
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
          description={`¿Estás seguro de que quieres eliminar el rol "${roleToDelete?.nombre}"? Esta acción no se puede deshacer.`}
          confirmText="Eliminar"
          cancelText="Cancelar"
          variant="destructive"
        />
      </div>
    </div>
  );
}
