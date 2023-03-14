import { Tabs, Tab } from "@mui/material";
import { User } from "@supabase/supabase-js";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface TabNavigatorProps {
  user: User | null;
}

const routesProtected = ["/only-authenticated"];

const TabNavigator = ({ user }: TabNavigatorProps) => {
  const { pathname } = useLocation();

  return (
    <Tabs
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
      textColor="inherit"
      value={!user && routesProtected.includes(pathname) ? "/" : pathname}
    >
      <Tab label="Inicio" value="/" to="/" component={RouterLink} />
      {user && (
        <Tab
          label="Autenticados"
          value="/only-authenticated"
          to="/only-authenticated"
          component={RouterLink}
        />
      )}
    </Tabs>
  );
};

export default TabNavigator;
