import { useState } from "react";
import { SupabaseService } from "../../services";
import type { Provider } from "@supabase/supabase-js";
import withReactContent from "sweetalert2-react-content";

interface Props {
  provider: Provider;
  setSubmitting?: (isSubmitting: boolean) => void;
}

const useButtonSocialProvider = ({ provider, setSubmitting }: Props) => {
  const [isLoading, setLoading] = useState<boolean>();

  const signInWithOAuth = async () => {
    setLoading(true);
    setSubmitting?.(true);

    await SupabaseService.auth.signInWithOAuth({
      provider,
    });
  };

  return { isLoading, signInWithOAuth };
};

export default useButtonSocialProvider;
