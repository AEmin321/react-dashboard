import { useState } from "react";
import Heading from "../components/Heading";
import OverviewChart from "../components/OverviewChart";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

const Overview = () => {
  const [filter, setFilter] = useState("sales");

  return (
    <Box margin="1.5rem 2rem">
      <Heading title="Overview" subTitle="oveview of the stats." />
      <Box sx={{ height: "70vh" }}>
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>Filter</InputLabel>
          <Select
            value={filter}
            label="filter"
            onChange={(event) => setFilter(event.target.value)}
          >
            <MenuItem value="sales" defaultChecked>
              Sales
            </MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart isDash={false} filter={filter} />
      </Box>
    </Box>
  );
};

export default Overview;
