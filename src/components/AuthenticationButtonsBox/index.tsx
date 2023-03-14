import { Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const routes = [
  {
    to: "/sign-in",
    name: "Iniciar Sesión",
  },
  {
    to: "/sign-up",
    name: "Registrarse",
  },
];

const AuthenticationButtonsBox = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
        alignItems: "center",
        gap: 2,
      }}
    >
      {routes.map((route) => (
        <Button
          key={route.name}
          sx={{
            backgroundColor: "white",
            color: "#2d3339",
            "&:hover": {
              backgroundColor: "rgba(255,255,255, .8)",
            },
          }}
          variant="contained"
          component={RouterLink}
          to={route.to}
        >
          {route.name}
        </Button>
      ))}
    </Box>
  );
};

export default AuthenticationButtonsBox;
