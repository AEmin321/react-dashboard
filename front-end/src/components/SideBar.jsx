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
import FlexBetween from "./FlexBetween";

const sidebarItems = {
  {
    text:"Transactions",
    icon:<ReceiptLongOutlined />
  },
  {
    text:"Geography",
    icon:<PublicOutlined />
  },
  {
    text:"Geography",
    icon:null />
  },
  {
    text:"Geography",
    icon:<PublicOutlined />
  },
  {
    text:"Geography",
    icon:<PublicOutlined />
  },
  {
    text:"Geography",
    icon:<PublicOutlined />
  },
  {
    text:"Geography",
    icon:<PublicOutlined />
  },
  {
    text:"Geography",
    icon:<PublicOutlined />
  },
  {
    text:"Geography",
    icon:<PublicOutlined />
  }
}

const SideBar = ({ isDrawerOpen, setIsDrawerOpen, isNotMobile }) => {
  const theme = useTheme();
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
            },
          }}
        >
          <Box width="100%">
            <Box m="1rem 1rem 1rem 1rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    MYDASH.
                  </Typography>
                </Box>
                {!isNotMobile && (
                  <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBar;
