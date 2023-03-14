import { Provider } from "@supabase/supabase-js";
import { LoadingButtonProps } from "@mui/lab";

export default interface SocialLoginButton {
  isSubmitting?: boolean;
  setSubmitting?: (isSubmitting: boolean) => void;
  styleLoadingButton: LoadingButtonProps;
  provider: Provider;
  nameProvider: string;
}
