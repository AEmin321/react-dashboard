import Heading from "../components/Heading";
import FlexBetween from "../components/FlexBetween";
import { useGetDashboardStatsQuery } from "../state/apiSlice";
import StatBox from "../components/StatBox";
import OverviewChart from "../components/OverviewChart";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "../components/BreakdownChart";

import { Button, useTheme, Box, Typography } from "@mui/material";
import {
  Download,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Dashboard = () => {
  const { data, isLoading } = useGetDashboardStatsQuery();
  const isNotMediumScreen = useMediaQuery("(min-width:700px)");
  const theme = useTheme();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `${Number(params.value).toFixed(2)}₺`,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# Of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
  ];
  return (
    <Box margin="1.5rem 2rem">
      <FlexBetween>
        <Heading title="Dashboard" subTitle="Welcome to dashboard." />
        <Button
          variant="contained"
          startIcon={<Download />}
          sx={{ backgroundColor: theme.palette.secondary[300] }}
          disableElevation
        >
          DOWNLOAD REPORTS
        </Button>
      </FlexBetween>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "20px",
          gridAutoRows: "160px",
          "&>div": { gridColumn: isNotMediumScreen ? undefined : "span 12" },
        }}
      >
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          p="1rem"
          sx={{ backgroundColor: theme.palette.secondary[900] }}
        >
          <OverviewChart filter="sales" isDash={true} />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          color="#000"
          sx={{ backgroundColor: theme.palette.secondary[900] }}
        >
          <BreakdownChart isDash={true} />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          sx={{ backgroundColor: theme.palette.secondary[900] }}
        >
          <DataGrid
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                backgroundColor: theme.palette.secondary[900],
              },
              "& .css-1nvrdbs-MuiDataGrid-root": {
                border: "none",
                backgroundColor: theme.palette.secondary[900],
              },
              "& .MuiDataGrid-columnHeader": {
                border: "none",
                backgroundColor: theme.palette.secondary[900],
              },
              "& .MuiDataGrid-scrollbarFiller": {
                border: "none",
                backgroundColor: theme.palette.secondary[900],
              },
              "& .MuiDataGrid-main": {
                borderBottom: "none",
                backgroundColor: theme.palette.secondary[900],
              },
              "& .css-1essi2g-MuiDataGrid-columnHeaderRow": {
                backgroundColor: theme.palette.secondary[900],
                borderBottom: "none",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme.palette.secondary[900],
              },
              "& .MuiDataGrid-topContainer": {
                backgroundColor: theme.palette.secondary[900],
                borderTop: "none",
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${theme.palette.secondary[200]} !important`,
              },
            }}
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={(data && data.transactions) || []}
            columns={columns}
          />
        </Box>
        <StatBox
          title="Total Customers"
          value={data && data.totalCustomers}
          increase="+10%"
          description="Since last month"
          icon={<Email />}
        />
        <StatBox
          title="Daily Sales"
          value={data && data.thisDayStats.totalSales}
          increase="+15%"
          description="Since today"
          icon={<PointOfSale />}
        />

        <StatBox
          title="Monthly Sales"
          value={data && data.thisMonthStats.totalSales}
          increase="+20%"
          description="Sales this month"
          icon={<PersonAdd />}
        />
        <StatBox
          title="Yearly Sales"
          value={data && data.yearlySalesTotal}
          increase="+45%"
          description="Since last year"
          icon={<Traffic />}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
