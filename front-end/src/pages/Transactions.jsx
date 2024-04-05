import { useState } from "react";
import { useGetTransactionsQuery } from "../state/apiSlice";
import Heading from "../components/Heading";

import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid/DataGrid";
import { useTheme } from "@mui/material";

const Transactions = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const { isLoading, data } = useGetTransactionsQuery({
    page: page,
    pageSize: pageSize,
    sort: JSON.stringify(sort),
    search: search,
  });

  console.log("🚀 ~ Transactions ~ data:", data);

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
      <Heading title="Transactions" subTitle="List of transactions" />
      <Box sx={{ height: "70vh" }}>
        <DataGrid
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
          }}
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[25, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
        />
      </Box>
    </Box>
  );
};

export default Transactions;
