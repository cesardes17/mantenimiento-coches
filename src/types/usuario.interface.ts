export interface Usuario {
  uid: string; // UUID generado automáticamente
  email: string;
  nombre: string;
  apellido_p: string;
  apellido_m: string;
  movil: string; // Ahora es TEXT en la base de datos
  fijo?: string | null; // Campo nullable en la base de datos
  rol_global_id: number; // FK a roles.id
  activo: boolean;
  fecha_registro: Date; // Puedes usar string o Date según cómo la parses
}
