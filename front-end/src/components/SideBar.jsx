import {
  Box,
  Divider,
  List,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutline,
} from "@mui/icons-material";
import profile from "../assets/profile.jpg";
import FlexBetween from "./FlexBetween";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const sidebarItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Quick Menu",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Users",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Stats",
    icon: null,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Settings",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const SideBar = ({ isDrawerOpen, setIsDrawerOpen, isNotMobile, user }) => {
  const { pathname } = useLocation();
  const [activeItem, setActiveItem] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveItem(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isDrawerOpen && (
        <Drawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: "250px",
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              width: "250px",
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 1.7rem 1rem 3rem">
              <FlexBetween color={theme.palette.secondary[300]}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h3" fontWeight="bold">
                    HADash.
                  </Typography>
                </Box>
                {!isNotMobile && (
                  <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {sidebarItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "5px 0 5px 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const btnName = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${btnName}`);
                        setActiveItem(text);
                      }}
                      sx={{
                        backgroundColor:
                          activeItem === btnName
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          activeItem === btnName
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                        "&:hover": {
                          backgroundColor:
                            activeItem === btnName
                              ? theme.palette.secondary[300]
                              : "",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "1.7rem",
                          color:
                            activeItem === btnName
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {activeItem === btnName && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box sx={{ position: "absolute", bottom: "1rem" }}>
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1rem 1.7rem 0 2rem">
              <Box
                component="img"
                src={profile}
                sx={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                alt="profile pic"
              />
              <Box textAlign="left">
                <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
                  {user.name}
                </Typography>
                <Typography fontSize="12px">{user.role}</Typography>
              </Box>
              <SettingsOutlined />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBar;
