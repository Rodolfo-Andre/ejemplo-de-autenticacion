import { Alert, Box, Link, Typography } from "@mui/material";
import { GridTextFieldForm, SocialProviderButtons } from "..";
import { GitHub, Google } from "@mui/icons-material";
import type {
  SocialLoginButtonProps,
  IFormFields,
  ISignIn,
} from "../../interfaces";
import { Link as RouterLink } from "react-router-dom";
import { useSign } from "../../hooks";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import LoadingButton from "@mui/lab/LoadingButton";

const initialValues: ISignIn = {
  email: "",
  password: "",
};

const providers: SocialLoginButtonProps[] = [
  {
    provider: "github",
    nameProvider: "GitHub",
    styleLoadingButton: {
      color: "secondary",
      startIcon: <GitHub />,
      sx: {
        "&:hover": {
          color: "#24292f",
          backgroundColor: "transparent",
        },
      },
    },
  },
  {
    provider: "google",
    nameProvider: "Google",
    styleLoadingButton: {
      startIcon: <Google />,
      color: "error",
      sx: {
        "&:hover": {
          color: "#d32f2f",
          backgroundColor: "transparent",
        },
      },
    },
  },
];

const formFields: IFormFields[] = [
  {
    gridProps: { xs: 12 },
    textFieldProps: {
      id: "email",
      type: "email",
      label: "Correo Electrónico",
    },
  },
  {
    gridProps: { xs: 12 },
    textFieldProps: {
      id: "password",
      type: "password",
      label: "Contraseña",
    },
  },
];

const SignInForm = () => {
  const { error, formik, isLoading, captcha, handleVerify } = useSign(
    initialValues,
    "signin"
  );

  return (
    <Box overflow={"auto"} sx={{ maxWidth: 350, marginX: 2 }}>
      <Typography variant="h3" gutterBottom>
        Iniciar Sesión
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <SocialProviderButtons formik={formik} providers={providers} />

      <form onSubmit={formik.handleSubmit}>
        <GridTextFieldForm
          formik={formik}
          formFields={formFields}
        ></GridTextFieldForm>

        <Box marginY={1.5}>
          <HCaptcha
            size="normal"
            ref={captcha}
            sitekey={import.meta.env.VITE_SITE_KEY}
            onVerify={handleVerify}
          />
        </Box>

        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          color="success"
          loading={isLoading}
          disabled={formik.isSubmitting}
          fullWidth={true}
        >
          Enviar
        </LoadingButton>

        <Link
          display={"block"}
          textAlign={"center"}
          marginTop={1.5}
          component={RouterLink}
          to={"/sign-up"}
        >
          ¿No tienes cuenta? Registrate
        </Link>

        <Link display={"block"} marginTop={1.5} component={RouterLink} to={"/"}>
          Ir al incio
        </Link>
      </form>
    </Box>
  );
};

export default SignInForm;
