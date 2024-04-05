import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { IconButton, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "@mui/icons-material";
import FlexBetween from "./FlexBetween";

const CustomDataGridToolbar = ({ setSearchInput, searchInput, setSearch }) => {
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <TextField
          label="Search..."
          sx={{ mb: "0.5rem" }}
          onChange={(event) => setSearchInput(event.target.value)}
          value={searchInput}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default CustomDataGridToolbar;
