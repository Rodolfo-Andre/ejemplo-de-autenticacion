import { useContext } from "react";
import { AuthObject } from "../../contexts";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box, Grid, Link, TextField, Typography } from "@mui/material";

const UserProfile = () => {
  const { user } = useContext(AuthObject.AuthContext);

  return (
    <Box paddingX={2}>
      <Typography variant="h3">Mi Cuenta</Typography>

      <Grid container spacing={3} justifyContent={"center"} marginY={5}>
        {user?.user_metadata.avatar_url && (
          <Grid item xs={12} sm={8}>
            <Typography align="center" variant="h5">
              Avatar
            </Typography>
            <Avatar
              sx={{ width: 80, height: 80, margin: "auto" }}
              alt="User"
              src={user.user_metadata.avatar_url}
            />
          </Grid>
        )}

        <Grid item xs={12} sm={8}>
          <TextField
            label="Nombres y Apellidos"
            variant="standard"
            value={user?.user_metadata.full_name}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={8}>
          <TextField
            label="Correo Electrónico"
            variant="standard"
            value={user?.user_metadata.email}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={8}>
          <TextField
            label="Medio por el cual iniciaste sesión"
            variant="standard"
            value={user?.app_metadata.provider}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>

      <Link display={"block"} marginTop={1.5} component={RouterLink} to={"/"}>
        Ir al incio
      </Link>
    </Box>
  );
};

export default UserProfile;
