export interface Usuario {
  email: string;
  uid: string; // UUID
  nombre: string;
  apellido_p: string;
  apellido_m: string;
  movil: number; // Puede ser string si se usa con input de texto
  fijo: number;
  rol: number; // ID de la tabla `roles`
  activo: boolean;
  fecha_registro: Date; // Usamos Date para representar la fecha
}
