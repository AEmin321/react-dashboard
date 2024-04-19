import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

const StatBox = ({ icon, title, value, increase, description }) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      flex="1 1 100%"
      p="1rem"
      sx={{ backgroundColor: theme.palette.secondary[900] }}
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>
      <Typography
        variant="h3"
        sx={{ color: theme.palette.secondary[200] }}
        fontWeight="600"
      >
        {value}
      </Typography>
      <FlexBetween gap="1rem">
        <Typography variant="h5" sx={{ color: theme.palette.secondary.light }}>
          {increase}
        </Typography>
        <Typography>{description}</Typography>
      </FlexBetween>
    </Box>
  );
};

export default StatBox;
