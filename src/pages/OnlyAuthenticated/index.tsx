import { Typography, Box } from "@mui/material";

const OnlyAuthenticated = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography marginTop={2} gutterBottom={true} variant="h2">
        Vista Privada
      </Typography>
      <Typography paragraph={true}>
        Esta página la puede ver solo usuarios autenticados
      </Typography>
    </Box>
  );
};

export default OnlyAuthenticated;
