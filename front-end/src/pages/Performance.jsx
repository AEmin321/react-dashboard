import { useGetUserPerformanceQuery } from "../state/apiSlice";
import Heading from "../components/Heading";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";

const Admin = () => {
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId);

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
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
  ];

  return (
    <Box margin="1.5rem 2rem">
      <Heading
        title="Performance"
        subTitle="Track your affiliate sales and more."
      />
      <Box sx={{ height: "70vh" }}>
        <DataGrid
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
          }}
          loading={isLoading || !data}
          rows={(data && data.sales) || []}
          columns={columns}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default Admin;
