import { IconButton, Box, AppBar, Toolbar } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import {
  AccountMenu,
  MobileDrawer,
  AuthenticationButtonsBox,
  AccountButtonWithAvatar,
  TabNavigator,
} from "../../components";
import { useHeader } from "../../hooks";

const Header = () => {
  const {
    mobileOpen,
    user,
    logout,
    anchorEl,
    open,
    openAccountMenu,
    handleClose,
    toggleMobileDrawer,
  } = useHeader();

  return (
    <>
      <Box>
        <AppBar
          sx={{
            backgroundColor: "#2d3339",
            position: "sticky",
            color: "white",
          }}
          component="nav"
        >
          <Toolbar
            sx={{
              justifyContent: {
                xs: "space-between",
                sm: "end",
              },
            }}
          >
            <IconButton
              onClick={toggleMobileDrawer}
              sx={{
                mr: 2,
                display: {
                  sm: "none",
                },
              }}
              color="inherit"
              edge="start"
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                display: {
                  sm: "flex",
                },
                gap: 2,
              }}
            >
              <TabNavigator user={user} />

              {!user ? (
                <AuthenticationButtonsBox />
              ) : (
                <AccountButtonWithAvatar
                  open={open}
                  openAccountMenu={openAccountMenu}
                  user={user}
                />
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <MobileDrawer
        toggleMobileDrawer={toggleMobileDrawer}
        mobileOpen={mobileOpen}
        user={user}
      />

      {user && (
        <AccountMenu
          anchorEl={anchorEl!}
          handleClose={handleClose}
          open={open}
          logout={logout}
        />
      )}

      <Outlet />
    </>
  );
};
export default Header;
