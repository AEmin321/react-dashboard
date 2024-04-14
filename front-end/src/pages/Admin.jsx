import { useGetAdminsQuery } from "../state/apiSlice";
import Heading from "../components/Heading";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { useTheme } from "@mui/material";

const Admin = () => {
  const { data, isLoading } = useGetAdminsQuery();

  console.log(data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "E-mail",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.5,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

  return (
    <Box margin="1.5rem 2rem">
      <Heading title="Admins" subTitle="List of the admins." />
      <Box sx={{ height: "70vh" }}>
        <DataGrid
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
          }}
          loading={isLoading || !data}
          rows={data || []}
          columns={columns}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default Admin;
