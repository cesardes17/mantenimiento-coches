export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      averias: {
        Row: {
          averia_descripcion: string
          coche_id: number
          fecha_averia: string
          fecha_reparacion: string | null
          garantia_hasta: string | null
          id: number
          km_odometro: number
          pieza_sustituida: string | null
          precio_mano_obra: number
          precio_pieza: number
          tienda_compra_pieza: string | null
        }
        Insert: {
          averia_descripcion: string
          coche_id: number
          fecha_averia: string
          fecha_reparacion?: string | null
          garantia_hasta?: string | null
          id?: number
          km_odometro: number
          pieza_sustituida?: string | null
          precio_mano_obra?: number
          precio_pieza?: number
          tienda_compra_pieza?: string | null
        }
        Update: {
          averia_descripcion?: string
          coche_id?: number
          fecha_averia?: string
          fecha_reparacion?: string | null
          garantia_hasta?: string | null
          id?: number
          km_odometro?: number
          pieza_sustituida?: string | null
          precio_mano_obra?: number
          precio_pieza?: number
          tienda_compra_pieza?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "averias_coche_id_fkey"
            columns: ["coche_id"]
            isOneToOne: false
            referencedRelation: "coches"
            referencedColumns: ["id"]
          },
        ]
      }
      coches: {
        Row: {
          anio_compra: number
          color: string
          combustible_id: number
          fecha_registro: string
          id: number
          imagen_url: string | null
          marca: string
          matricula: string
          modelo: string
          odometro: number
        }
        Insert: {
          anio_compra: number
          color: string
          combustible_id: number
          fecha_registro?: string
          id?: number
          imagen_url?: string | null
          marca: string
          matricula: string
          modelo: string
          odometro: number
        }
        Update: {
          anio_compra?: number
          color?: string
          combustible_id?: number
          fecha_registro?: string
          id?: number
          imagen_url?: string | null
          marca?: string
          matricula?: string
          modelo?: string
          odometro?: number
        }
        Relationships: [
          {
            foreignKeyName: "coches_combustible_id_fkey"
            columns: ["combustible_id"]
            isOneToOne: false
            referencedRelation: "combustibles"
            referencedColumns: ["id"]
          },
        ]
      }
      combustibles: {
        Row: {
          descripcion: string
          id: number
          tipo: string
        }
        Insert: {
          descripcion?: string
          id?: number
          tipo: string
        }
        Update: {
          descripcion?: string
          id?: number
          tipo?: string
        }
        Relationships: []
      }
      intervalos_mantenimiento: {
        Row: {
          coche_id: number
          id: number
          kms_aceite_motor: number | null
          kms_adblue: number | null
          kms_bateria_12v: number | null
          kms_bateria_almacenamiento: number | null
          kms_bateria_alta_tension: number | null
          kms_bateria_v16: number | null
          kms_bujias: number | null
          kms_cadena_traccion: number | null
          kms_calentadores: number | null
          kms_celdas_combustible: number | null
          kms_compresor_aire: number | null
          kms_controlador_carga: number | null
          kms_correa_distribucion: number | null
          kms_correas_auxiliares: number | null
          kms_crucetas_cardan: number | null
          kms_cubrepolvo_palieres: number | null
          kms_engrase: number | null
          kms_escape_catalizador: number | null
          kms_estanqueidad_gas: number | null
          kms_filtro_aceite: number | null
          kms_filtro_aire: number | null
          kms_filtro_aire_celda_combustible: number | null
          kms_filtro_combustible: number | null
          kms_filtro_gas: number | null
          kms_filtro_habitaculo: number | null
          kms_frenos: number | null
          kms_frenos_regenerativos: number | null
          kms_iluminacion: number | null
          kms_inversor_potencia: number | null
          kms_inyectores_regulador: number | null
          kms_limpiaparabrisas: number | null
          kms_liquido_refrigerante: number | null
          kms_neumaticos: number | null
          kms_paneles_solares: number | null
          kms_refrigeracion_bateria: number | null
          kms_regulador_presion: number | null
          kms_sensores_electricos: number | null
          kms_sistema_carga_conectores: number | null
          kms_sistema_electrico_alta: number | null
          kms_suspension_direccion: number | null
          kms_tanque_aire_comprimido: number | null
          kms_tanque_glp_gnc: number | null
          kms_tanque_hidrogeno: number | null
          kms_valvulas_conexion_gas: number | null
          kms_valvulas_presion: number | null
          kms_valvulina: number | null
        }
        Insert: {
          coche_id: number
          id?: number
          kms_aceite_motor?: number | null
          kms_adblue?: number | null
          kms_bateria_12v?: number | null
          kms_bateria_almacenamiento?: number | null
          kms_bateria_alta_tension?: number | null
          kms_bateria_v16?: number | null
          kms_bujias?: number | null
          kms_cadena_traccion?: number | null
          kms_calentadores?: number | null
          kms_celdas_combustible?: number | null
          kms_compresor_aire?: number | null
          kms_controlador_carga?: number | null
          kms_correa_distribucion?: number | null
          kms_correas_auxiliares?: number | null
          kms_crucetas_cardan?: number | null
          kms_cubrepolvo_palieres?: number | null
          kms_engrase?: number | null
          kms_escape_catalizador?: number | null
          kms_estanqueidad_gas?: number | null
          kms_filtro_aceite?: number | null
          kms_filtro_aire?: number | null
          kms_filtro_aire_celda_combustible?: number | null
          kms_filtro_combustible?: number | null
          kms_filtro_gas?: number | null
          kms_filtro_habitaculo?: number | null
          kms_frenos?: number | null
          kms_frenos_regenerativos?: number | null
          kms_iluminacion?: number | null
          kms_inversor_potencia?: number | null
          kms_inyectores_regulador?: number | null
          kms_limpiaparabrisas?: number | null
          kms_liquido_refrigerante?: number | null
          kms_neumaticos?: number | null
          kms_paneles_solares?: number | null
          kms_refrigeracion_bateria?: number | null
          kms_regulador_presion?: number | null
          kms_sensores_electricos?: number | null
          kms_sistema_carga_conectores?: number | null
          kms_sistema_electrico_alta?: number | null
          kms_suspension_direccion?: number | null
          kms_tanque_aire_comprimido?: number | null
          kms_tanque_glp_gnc?: number | null
          kms_tanque_hidrogeno?: number | null
          kms_valvulas_conexion_gas?: number | null
          kms_valvulas_presion?: number | null
          kms_valvulina?: number | null
        }
        Update: {
          coche_id?: number
          id?: number
          kms_aceite_motor?: number | null
          kms_adblue?: number | null
          kms_bateria_12v?: number | null
          kms_bateria_almacenamiento?: number | null
          kms_bateria_alta_tension?: number | null
          kms_bateria_v16?: number | null
          kms_bujias?: number | null
          kms_cadena_traccion?: number | null
          kms_calentadores?: number | null
          kms_celdas_combustible?: number | null
          kms_compresor_aire?: number | null
          kms_controlador_carga?: number | null
          kms_correa_distribucion?: number | null
          kms_correas_auxiliares?: number | null
          kms_crucetas_cardan?: number | null
          kms_cubrepolvo_palieres?: number | null
          kms_engrase?: number | null
          kms_escape_catalizador?: number | null
          kms_estanqueidad_gas?: number | null
          kms_filtro_aceite?: number | null
          kms_filtro_aire?: number | null
          kms_filtro_aire_celda_combustible?: number | null
          kms_filtro_combustible?: number | null
          kms_filtro_gas?: number | null
          kms_filtro_habitaculo?: number | null
          kms_frenos?: number | null
          kms_frenos_regenerativos?: number | null
          kms_iluminacion?: number | null
          kms_inversor_potencia?: number | null
          kms_inyectores_regulador?: number | null
          kms_limpiaparabrisas?: number | null
          kms_liquido_refrigerante?: number | null
          kms_neumaticos?: number | null
          kms_paneles_solares?: number | null
          kms_refrigeracion_bateria?: number | null
          kms_regulador_presion?: number | null
          kms_sensores_electricos?: number | null
          kms_sistema_carga_conectores?: number | null
          kms_sistema_electrico_alta?: number | null
          kms_suspension_direccion?: number | null
          kms_tanque_aire_comprimido?: number | null
          kms_tanque_glp_gnc?: number | null
          kms_tanque_hidrogeno?: number | null
          kms_valvulas_conexion_gas?: number | null
          kms_valvulas_presion?: number | null
          kms_valvulina?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "intervalos_mantenimiento_coche_id_fkey"
            columns: ["coche_id"]
            isOneToOne: true
            referencedRelation: "coches"
            referencedColumns: ["id"]
          },
        ]
      }
      km_ultimo_mantenimiento: {
        Row: {
          coche_id: number
          id: number
          impuesto_municipal: string | null
          itv: string | null
          kms_aceite_motor: number | null
          kms_adblue: number | null
          kms_bateria_12v: number | null
          kms_bateria_almacenamiento: number | null
          kms_bateria_alta_tension: number | null
          kms_bateria_v16: number | null
          kms_bujias: number | null
          kms_cadena_traccion: number | null
          kms_calentadores: number | null
          kms_celdas_combustible: number | null
          kms_compresor_aire: number | null
          kms_controlador_carga: number | null
          kms_correa_distribucion: number | null
          kms_correas_auxiliares: number | null
          kms_crucetas_cardan: number | null
          kms_cubrepolvo_palieres: number | null
          kms_engrase: number | null
          kms_escape_catalizador: number | null
          kms_estanqueidad_gas: number | null
          kms_filtro_aceite: number | null
          kms_filtro_aire: number | null
          kms_filtro_aire_celda_combustible: number | null
          kms_filtro_combustible: number | null
          kms_filtro_gas: number | null
          kms_filtro_habitaculo: number | null
          kms_frenos: number | null
          kms_frenos_regenerativos: number | null
          kms_iluminacion: number | null
          kms_inversor_potencia: number | null
          kms_inyectores_regulador: number | null
          kms_limpiaparabrisas: number | null
          kms_liquido_refrigerante: number | null
          kms_neumaticos: number | null
          kms_paneles_solares: number | null
          kms_refrigeracion_bateria: number | null
          kms_regulador_presion: number | null
          kms_sensores_electricos: number | null
          kms_sistema_carga_conectores: number | null
          kms_sistema_electrico_alta: number | null
          kms_suspension_direccion: number | null
          kms_tanque_aire_comprimido: number | null
          kms_tanque_glp_gnc: number | null
          kms_tanque_hidrogeno: number | null
          kms_valvulas_conexion_gas: number | null
          kms_valvulas_presion: number | null
          kms_valvulina: number | null
          seguro: string | null
        }
        Insert: {
          coche_id: number
          id?: never
          impuesto_municipal?: string | null
          itv?: string | null
          kms_aceite_motor?: number | null
          kms_adblue?: number | null
          kms_bateria_12v?: number | null
          kms_bateria_almacenamiento?: number | null
          kms_bateria_alta_tension?: number | null
          kms_bateria_v16?: number | null
          kms_bujias?: number | null
          kms_cadena_traccion?: number | null
          kms_calentadores?: number | null
          kms_celdas_combustible?: number | null
          kms_compresor_aire?: number | null
          kms_controlador_carga?: number | null
          kms_correa_distribucion?: number | null
          kms_correas_auxiliares?: number | null
          kms_crucetas_cardan?: number | null
          kms_cubrepolvo_palieres?: number | null
          kms_engrase?: number | null
          kms_escape_catalizador?: number | null
          kms_estanqueidad_gas?: number | null
          kms_filtro_aceite?: number | null
          kms_filtro_aire?: number | null
          kms_filtro_aire_celda_combustible?: number | null
          kms_filtro_combustible?: number | null
          kms_filtro_gas?: number | null
          kms_filtro_habitaculo?: number | null
          kms_frenos?: number | null
          kms_frenos_regenerativos?: number | null
          kms_iluminacion?: number | null
          kms_inversor_potencia?: number | null
          kms_inyectores_regulador?: number | null
          kms_limpiaparabrisas?: number | null
          kms_liquido_refrigerante?: number | null
          kms_neumaticos?: number | null
          kms_paneles_solares?: number | null
          kms_refrigeracion_bateria?: number | null
          kms_regulador_presion?: number | null
          kms_sensores_electricos?: number | null
          kms_sistema_carga_conectores?: number | null
          kms_sistema_electrico_alta?: number | null
          kms_suspension_direccion?: number | null
          kms_tanque_aire_comprimido?: number | null
          kms_tanque_glp_gnc?: number | null
          kms_tanque_hidrogeno?: number | null
          kms_valvulas_conexion_gas?: number | null
          kms_valvulas_presion?: number | null
          kms_valvulina?: number | null
          seguro?: string | null
        }
        Update: {
          coche_id?: number
          id?: never
          impuesto_municipal?: string | null
          itv?: string | null
          kms_aceite_motor?: number | null
          kms_adblue?: number | null
          kms_bateria_12v?: number | null
          kms_bateria_almacenamiento?: number | null
          kms_bateria_alta_tension?: number | null
          kms_bateria_v16?: number | null
          kms_bujias?: number | null
          kms_cadena_traccion?: number | null
          kms_calentadores?: number | null
          kms_celdas_combustible?: number | null
          kms_compresor_aire?: number | null
          kms_controlador_carga?: number | null
          kms_correa_distribucion?: number | null
          kms_correas_auxiliares?: number | null
          kms_crucetas_cardan?: number | null
          kms_cubrepolvo_palieres?: number | null
          kms_engrase?: number | null
          kms_escape_catalizador?: number | null
          kms_estanqueidad_gas?: number | null
          kms_filtro_aceite?: number | null
          kms_filtro_aire?: number | null
          kms_filtro_aire_celda_combustible?: number | null
          kms_filtro_combustible?: number | null
          kms_filtro_gas?: number | null
          kms_filtro_habitaculo?: number | null
          kms_frenos?: number | null
          kms_frenos_regenerativos?: number | null
          kms_iluminacion?: number | null
          kms_inversor_potencia?: number | null
          kms_inyectores_regulador?: number | null
          kms_limpiaparabrisas?: number | null
          kms_liquido_refrigerante?: number | null
          kms_neumaticos?: number | null
          kms_paneles_solares?: number | null
          kms_refrigeracion_bateria?: number | null
          kms_regulador_presion?: number | null
          kms_sensores_electricos?: number | null
          kms_sistema_carga_conectores?: number | null
          kms_sistema_electrico_alta?: number | null
          kms_suspension_direccion?: number | null
          kms_tanque_aire_comprimido?: number | null
          kms_tanque_glp_gnc?: number | null
          kms_tanque_hidrogeno?: number | null
          kms_valvulas_conexion_gas?: number | null
          kms_valvulas_presion?: number | null
          kms_valvulina?: number | null
          seguro?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "km_ultimo_mantenimiento_coche_id_fkey"
            columns: ["coche_id"]
            isOneToOne: true
            referencedRelation: "coches"
            referencedColumns: ["id"]
          },
        ]
      }
      repostajes: {
        Row: {
          coche_id: number
          fecha: string
          id: number
          km_repostaje: number
          odometro: number
          precio_litro: number
          total_repostaje: number
          usuario_id: string
        }
        Insert: {
          coche_id: number
          fecha: string
          id?: never
          km_repostaje: number
          odometro: number
          precio_litro: number
          total_repostaje: number
          usuario_id: string
        }
        Update: {
          coche_id?: number
          fecha?: string
          id?: never
          km_repostaje?: number
          odometro?: number
          precio_litro?: number
          total_repostaje?: number
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "repostajes_coche_id_fkey"
            columns: ["coche_id"]
            isOneToOne: false
            referencedRelation: "coches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "repostajes_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuario_actual"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "repostajes_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["uid"]
          },
        ]
      }
      roles: {
        Row: {
          descripcion: string
          id: number
          nombre: string
        }
        Insert: {
          descripcion: string
          id?: number
          nombre: string
        }
        Update: {
          descripcion?: string
          id?: number
          nombre?: string
        }
        Relationships: []
      }
      usuarios: {
        Row: {
          activo: boolean
          apellido_m: string
          apellido_p: string
          email: string
          fecha_registro: string
          fijo: string | null
          movil: string
          nombre: string
          rol_global_id: number
          uid: string
        }
        Insert: {
          activo?: boolean
          apellido_m: string
          apellido_p: string
          email: string
          fecha_registro?: string
          fijo?: string | null
          movil: string
          nombre: string
          rol_global_id: number
          uid?: string
        }
        Update: {
          activo?: boolean
          apellido_m?: string
          apellido_p?: string
          email?: string
          fecha_registro?: string
          fijo?: string | null
          movil?: string
          nombre?: string
          rol_global_id?: number
          uid?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_rol_global"
            columns: ["rol_global_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      usuarios_coches: {
        Row: {
          coche_id: number
          fecha_asignacion: string
          id: number
          rol_en_coche: string
          usuario_id: string
        }
        Insert: {
          coche_id: number
          fecha_asignacion?: string
          id?: never
          rol_en_coche: string
          usuario_id: string
        }
        Update: {
          coche_id?: number
          fecha_asignacion?: string
          id?: never
          rol_en_coche?: string
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_usuarios_coches_coche"
            columns: ["coche_id"]
            isOneToOne: false
            referencedRelation: "coches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_usuarios_coches_usuario"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuario_actual"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "fk_usuarios_coches_usuario"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["uid"]
          },
        ]
      }
    }
    Views: {
      usuario_actual: {
        Row: {
          activo: boolean | null
          apellido_m: string | null
          apellido_p: string | null
          email: string | null
          fecha_registro: string | null
          fijo: string | null
          movil: string | null
          nombre: string | null
          rol_global_id: number | null
          uid: string | null
        }
        Insert: {
          activo?: boolean | null
          apellido_m?: string | null
          apellido_p?: string | null
          email?: string | null
          fecha_registro?: string | null
          fijo?: string | null
          movil?: string | null
          nombre?: string | null
          rol_global_id?: number | null
          uid?: string | null
        }
        Update: {
          activo?: boolean | null
          apellido_m?: string | null
          apellido_p?: string | null
          email?: string | null
          fecha_registro?: string | null
          fijo?: string | null
          movil?: string | null
          nombre?: string | null
          rol_global_id?: number | null
          uid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_rol_global"
            columns: ["rol_global_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      eliminar_coche_cascada: {
        Args: { id_coche: number }
        Returns: undefined
      }
      eliminar_usuario: {
        Args: { email_param: string }
        Returns: string[]
      }
      eliminar_usuarios_inactivos: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
      email_actual: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      es_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      es_colaborador_del_coche: {
        Args: { p_id_dato_coche: number }
        Returns: boolean
      }
      es_dueno_del_coche: {
        Args: { p_id_dato_coche: number }
        Returns: boolean
      }
      esta_relacionado_con_coche: {
        Args: { p_id: number }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
