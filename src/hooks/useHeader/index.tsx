import { useState, MouseEvent, useContext } from "react";
import { AuthObject } from "../../contexts";

const useHeader = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { user, logout } = useContext(AuthObject.AuthContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openAccountMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileDrawer = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return {
    mobileOpen,
    user,
    logout,
    anchorEl,
    open,
    openAccountMenu,
    handleClose,
    toggleMobileDrawer,
  };
};

export default useHeader;
