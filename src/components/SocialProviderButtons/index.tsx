import { Grid } from "@mui/material";
import SocialLoginButton from "../SocialLoginButton";
import { FormikProps } from "formik";
import { SocialLoginButtonProps } from "../../interfaces";

interface SocialProviderButtonsProps<T> {
  providers: SocialLoginButtonProps[];
  formik: FormikProps<T>;
}

const SocialProviderButtons = <T,>({
  providers,
  formik,
}: SocialProviderButtonsProps<T>) => {
  return (
    <Grid container gap={2} marginY={1.5}>
      {providers &&
        providers.map((provider) => (
          <Grid item xs={12} key={provider.nameProvider}>
            <SocialLoginButton
              {...{
                ...provider,
                isSubmitting: formik.isSubmitting,
                setSubmitting: formik.setSubmitting,
              }}
            ></SocialLoginButton>
          </Grid>
        ))}
    </Grid>
  );
};

export default SocialProviderButtons;
