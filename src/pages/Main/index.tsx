import { Box, Typography } from "@mui/material";

const Main = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography marginTop={2} gutterBottom={true} variant="h2">
        Vista Pública
      </Typography>
      <Typography paragraph={true}>
        Esta página la puede ver cualquier usuario
      </Typography>
    </Box>
  );
};

export default Main;
