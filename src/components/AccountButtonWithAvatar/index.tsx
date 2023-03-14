import { Tooltip, IconButton, Avatar } from "@mui/material";
import { User } from "@supabase/supabase-js";
import { MouseEvent } from "react";

interface AccountButtonWithAvatarProps {
  openAccountMenu: (event: MouseEvent<HTMLElement>) => void;
  open: boolean;
  user: User;
}

const AccountButtonWithAvatar = ({
  openAccountMenu,
  open,
  user,
}: AccountButtonWithAvatarProps) => {
  return (
    <Tooltip title="Configuración de Cuenta">
      <IconButton
        onClick={openAccountMenu}
        size="small"
        sx={{ ml: 2, margin: 0 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }}>
          {String(user.email![0]).toUpperCase()}
        </Avatar>
      </IconButton>
    </Tooltip>
  );
};

export default AccountButtonWithAvatar;
