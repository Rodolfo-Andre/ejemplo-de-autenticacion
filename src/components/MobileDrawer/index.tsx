import { Home, Shield, Login, AssignmentInd } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { User } from "@supabase/supabase-js";
import { Link as RouterLink } from "react-router-dom";

interface MobileDrawerProps {
  toggleMobileDrawer: () => void;
  mobileOpen: boolean;
  user: User | null;
}

const MobileDrawer = ({
  toggleMobileDrawer,
  mobileOpen,
  user,
}: MobileDrawerProps) => {
  return (
    <Box component="nav">
      <Drawer
        onClose={toggleMobileDrawer}
        open={mobileOpen}
        ModalProps={{ keepMounted: true }}
      >
        <Box onClick={toggleMobileDrawer}>
          <List>
            <ListItem>
              <ListItemButton component={RouterLink} to="/">
                <ListItemIcon>
                  <Home sx={{ color: "#2d3339" }} />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItemButton>
            </ListItem>

            {user ? (
              <ListItem>
                <ListItemButton component={RouterLink} to="/only-authenticated">
                  <ListItemIcon>
                    <Shield sx={{ color: "#2d3339" }} />
                  </ListItemIcon>
                  <ListItemText primary="Autenticados" />
                </ListItemButton>
              </ListItem>
            ) : (
              <>
                <Divider />

                <ListItem>
                  <ListItemButton component={RouterLink} to="/sign-in">
                    <ListItemIcon>
                      <Login sx={{ color: "#2d3339" }} />
                    </ListItemIcon>
                    <ListItemText primary="Iniciar Sesión" />
                  </ListItemButton>
                </ListItem>

                <ListItem>
                  <ListItemButton component={RouterLink} to="/sign-up">
                    <ListItemIcon>
                      <AssignmentInd sx={{ color: "#2d3339" }} />
                    </ListItemIcon>
                    <ListItemText primary="Registrarse" />
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileDrawer;
