import { Alert, Box, Link, Typography } from "@mui/material";
import type { IFormFields, ISignUp } from "../../interfaces";
import { Link as RouterLink } from "react-router-dom";
import { useSign } from "../../hooks";
import { GridTextFieldForm } from "..";
import LoadingButton from "@mui/lab/LoadingButton";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const initialValues: ISignUp = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const formFields: IFormFields[] = [
  {
    gridProps: {
      xs: 6,
    },
    textFieldProps: {
      fullWidth: true,
      id: "firstName",
      type: "text",
      label: "Nombres",
    },
  },
  {
    gridProps: {
      xs: 6,
    },
    textFieldProps: {
      fullWidth: true,
      id: "lastName",
      type: "text",
      label: "Apellidos",
    },
  },
  {
    gridProps: {
      xs: 12,
    },
    textFieldProps: {
      fullWidth: true,
      id: "email",
      type: "email",
      label: "Correo Electrónico",
    },
  },
  {
    gridProps: {
      xs: 12,
    },
    textFieldProps: {
      fullWidth: true,
      id: "password",
      type: "password",
      label: "Contraseña",
    },
  },
];

const SignUpForm = () => {
  const { error, formik, isLoading, captcha, handleVerify } = useSign(
    initialValues,
    "signup"
  );

  return (
    <Box overflow={"auto"} sx={{ maxWidth: 350, marginX: 2 }}>
      <Typography variant="h3" gutterBottom>
        Registrarse
      </Typography>

      {error && (
        <Alert sx={{ marginBottom: 2.5 }} severity="error">
          {error}
        </Alert>
      )}

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
          Registrarse
        </LoadingButton>

        <Link
          display={"block"}
          align="center"
          marginTop={1.5}
          component={RouterLink}
          to={"/sign-in"}
        >
          ¿Ya tienes cuenta? Inicia Sesión
        </Link>

        <Link display={"block"} marginTop={1.5} component={RouterLink} to={"/"}>
          Ir al incio
        </Link>
      </form>
    </Box>
  );
};

export default SignUpForm;
