import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

const Heading = ({ title, subTitle }) => {
  const theme = useTheme();

  return (
    <Box mb="1rem">
      <Typography
        fontWeight="bold"
        variant="h3"
        color={theme.palette.secondary[200]}
        mb="5px"
      >
        {title}
      </Typography>
      <Typography color={theme.palette.secondary[200]} variant="h5">
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Heading;
