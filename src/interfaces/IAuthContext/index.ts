import type { User } from "@supabase/supabase-js";

interface IAuthContext {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export default IAuthContext;
