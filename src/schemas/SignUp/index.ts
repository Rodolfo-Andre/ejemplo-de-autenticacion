import * as Yup from "yup";
import { ISignUp } from "../../interfaces";

const SignUp: Yup.ObjectSchema<ISignUp> = Yup.object({
  firstName: Yup.string()
    .min(3, "El campo nombres debe tener al menos 3 caracteres")
    .max(50, "El campo nombres debe tener como máximo 50 caracteres")
    .required("El campo nombres es requerido"),
  lastName: Yup.string()
    .min(3, "El campo apellidos debe tener al menos 3 caracteres")
    .max(50, "El campo apellidos  debe tener como máximo 50 caracteres")
    .required("El campo apellidos es requerido"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El campo correo electrónico es requerido"),
  password: Yup.string().required("El campo contraseña es requerido"),
});

export default SignUp;
