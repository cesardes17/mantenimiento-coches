import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().email("Correo no válido").required("Requerido"),
  password: Yup.string().required("Requerido"),
});

const registerSchema = Yup.object({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo es obligatorio"),

  firstName: Yup.string().required("El nombre es obligatorio"),

  firstLastName: Yup.string().required("El primer apellido es obligatorio"),

  secondLastName: Yup.string(),

  mobilePhone: Yup.string()
    .required("El teléfono móvil es obligatorio")
    .min(9, "Número de móvil inválido")
    .max(15, "Número de móvil inválido"),

  landlinePhone: Yup.string()
    .nullable()
    .min(9, "Número de teléfono fijo inválido")
    .max(15, "Número de teléfono fijo inválido"),

  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("Confirma tu contraseña"),
});

export { loginSchema, registerSchema };
