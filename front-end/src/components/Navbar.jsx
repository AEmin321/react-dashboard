import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {
  Menu,
  Search,
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import { InputBase, useTheme, Badge } from "@mui/material";
import { useDispatch } from "react-redux";
import FlexBetween from "./FlexBetween";
import { setMode } from "../state";

const Navbar = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

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
            <Menu />
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
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
