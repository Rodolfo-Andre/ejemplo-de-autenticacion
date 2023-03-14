import { LoadingButton } from "@mui/lab";
import { SocialLoginButtonProps } from "../../interfaces";
import { useButtonSocialProvider } from "../../hooks";

const SocialLoginButton = (props: SocialLoginButtonProps) => {
  const {
    provider,
    nameProvider,
    isSubmitting,
    setSubmitting,
    styleLoadingButton,
  } = props;
  const { isLoading, signInWithOAuth } = useButtonSocialProvider({
    provider,
    setSubmitting,
  });

  return (
    <LoadingButton
      {...styleLoadingButton}
      disabled={isSubmitting}
      loading={isLoading}
      onClick={() => signInWithOAuth()}
      variant="contained"
      size="large"
      fullWidth
    >
      Inicia Sesión con {nameProvider}
    </LoadingButton>
  );
};

export default SocialLoginButton;
