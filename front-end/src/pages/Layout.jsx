import { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useGetUserQuery } from "../state/apiSlice.js";

const Layout = () => {
  const isNotMobile = useMediaQuery("(min-width:600px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const userId = useSelector((state) => state.global.userId);
  console.log("🚀 ~ Layout ~ userId:", userId);

  const { data } = useGetUserQuery(userId);
  console.log("🚀 ~ Layout ~ data:", data);

  return (
    <Box width="100%" height="100%" display={isNotMobile ? "flex" : "block"}>
      <SideBar
        isNotMobile={isNotMobile}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        user={data || {}}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
