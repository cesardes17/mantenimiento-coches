import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().email("Correo no válido").required("Requerido"),
  password: Yup.string().required("Requerido"),
});

export { loginSchema };
