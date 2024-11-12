import React from "react";
import { Box, Typography } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4">
        Добро пожаловать на страницу Dashboard!
      </Typography>
    </Box>
  );
};

export default Dashboard;
