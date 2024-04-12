import React from "react";
import Heading from "../components/Heading";

import Box from "@mui/material/Box";
import BreakdownChart from "../components/BreakdownChart";

const BreakDown = () => {
  return (
    <Box>
      <Heading
        title="Breakdown Chart"
        subTitle="checkout the breakdown of categories."
      />
      <Box sx={{ height: "70vh" }}>
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default BreakDown;
