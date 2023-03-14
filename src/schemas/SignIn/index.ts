import * as Yup from "yup";
import { ISignIn } from "../../interfaces";

const SignIn: Yup.ObjectSchema<ISignIn> = Yup.object({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El campo correo electrónico es requerido"),
  password: Yup.string().required("El campo contraseña es requerido"),
});

export default SignIn;
