import { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import useMediaQuery from "@mui/material/useMediaQuery";

const Layout = () => {
  const isNotMobile = useMediaQuery("(min-width:600px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <Box width="100%" height="100%" display={isNotMobile ? "flex" : "block"}>
      <SideBar
        isNotMobile={isNotMobile}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <Box>
        <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
