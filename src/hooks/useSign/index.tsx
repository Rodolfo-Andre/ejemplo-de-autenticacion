import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useFormik } from "formik";
import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthObject } from "../../contexts";
import { ISignIn, ISignUp } from "../../interfaces";
import { SignInSchema, SignUpSchema } from "../../schemas";
import { SupabaseService } from "../../services";
import { AuthError } from "@supabase/supabase-js";
import { Typography } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

type typeOfSession = "signin" | "signup";

const useSign = <T extends ISignUp | ISignIn>(
  initialValues: T,
  type: typeOfSession
) => {
  const { login } = useContext(AuthObject.AuthContext);
  const formik = useFormik<T>({
    initialValues,
    validationSchema: type === "signin" ? SignInSchema : SignUpSchema,
    onSubmit: (data) => {
      signWithSupabase(data);
    },
    validateOnChange: false,
  });
  const [error, setError] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const captcha = useRef<HCaptcha>(null);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const signIn = async (user: ISignIn) => {
    const { data, error } = await SupabaseService.auth.signInWithPassword({
      ...user,
      options: {
        captchaToken,
      },
    });

    if (data.user) {
      MySwal.fire({
        title: (
          <Typography fontSize={24}>
            ¡Bienvenido! Haz iniciado sesión correctamente.
          </Typography>
        ),
        confirmButtonText: "Aceptar",
        icon: "success",
        target: "body",
        allowOutsideClick: false,
        willClose: () => {
          login(data.user!);
        },
      });
    }

    return { error };
  };

  const signUp = async (user: ISignUp) => {
    const { email, password, ...rest } = user;
    const { data, error } = await SupabaseService.auth.signUp({
      email,
      password,
      options: {
        data: {
          ...rest,
        },
        captchaToken,
      },
    });

    if (data.user) {
      MySwal.fire({
        title: (
          <Typography fontSize={24}>
            Te has registrado correctamente. Revisa tu correo electrónico para
            que puedas verificar tu cuenta.
          </Typography>
        ),
        confirmButtonText: "Aceptar",
        icon: "success",
        target: "body",
        allowOutsideClick: false,
        willClose: () => {
          navigate("/sign-in");
        },
      });
    }

    return { error };
  };

  const signWithSupabase = async (user: T) => {
    setLoading(true);
    formik.setSubmitting(true);

    let error: AuthError | null = null;

    if (type === "signin") {
      error = (await signIn(user as ISignIn)).error;
    }

    if (type === "signup") {
      error = (await signUp(user as ISignUp)).error;
    }

    if (error) {
      setError(error.message);
      formik.setSubmitting(false);
      setLoading(false);
    }

    captcha.current?.resetCaptcha();
  };

  return { formik, error, captcha, handleVerify, isLoading };
};

export default useSign;
