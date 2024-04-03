import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

const Heading = ({ title, subTitle }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        fontWeight="bold"
        variant="h3"
        color={theme.palette.secondary[300]}
        mb="5px"
      >
        {title}
      </Typography>
      <Typography color={theme.palette.secondary[300]} variant="h5">
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Heading;