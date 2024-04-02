import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import profile from "../assets/profile.jpg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Menu as MenuIcon,
  MenuOpen,
  Search,
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsNoneOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import { InputBase, useTheme, Badge, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import FlexBetween from "./FlexBetween";
import { setMode } from "../state/themeSlice";

const Navbar = ({ isDrawerOpen, setIsDrawerOpen, user }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar width="100%" height="100%" position="static" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          backgroundColor: theme.palette.neutral.main,
        }}
      >
        <FlexBetween>
          <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            {isDrawerOpen ? <MenuOpen /> : <MenuIcon />}
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.secondary[900]}
            gap="3rem"
            borderRadius="9px"
            padding="0.1rem 0.7rem"
          >
            <InputBase placeholder="Search.." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        <FlexBetween>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "light" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
          <IconButton>
            <Badge color="secondary" variant="dot">
              <NotificationsNoneOutlined />
            </Badge>
          </IconButton>
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "0.9rem",
              }}
            >
              <Box
                component="img"
                src={profile}
                sx={{
                  height: "32px",
                  width: "32px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                alt="profile pic"
              />
              <Box textAlign="left">
                <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                  {user.name}
                </Typography>
                <Typography fontSize="10px" textTransform="capitalize">
                  {user.role}
                </Typography>
              </Box>
              <ArrowDropDownOutlined />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
