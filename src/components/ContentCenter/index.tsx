import { Box } from "@mui/material";
import { ReactNode } from "react";

interface ContentCenterProps {
  children: ReactNode;
}

const ContentCenter = ({ children }: ContentCenterProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default ContentCenter;
