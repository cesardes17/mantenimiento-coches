import { Rol } from "@/types/rol";

export const mockRoles: Rol[] = [
  {
    id: 1,
    nombre: "Administrador",
    descripcion: "Acceso completo al sistema",
  },
  {
    id: 2,
    nombre: "Editor",
    descripcion: "Puede crear y editar contenido",
  },
  {
    id: 3,
    nombre: "Moderador",
    descripcion: "Puede moderar comentarios y usuarios",
  },
  {
    id: 4,
    nombre: "Usuario",
    descripcion: "Acceso básico de lectura",
  },
  {
    id: 5,
    nombre: "Invitado",
    descripcion: "Acceso limitado temporal",
  },
];
