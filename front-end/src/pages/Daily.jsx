import React, { useState, useMemo } from "react";
import { useGetSalesQuery } from "../state/apiSlice";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useTheme } from "@mui/material";
import Loader from "../components/Loader";
import { ResponsiveLine } from "@nivo/line";

const Daily = () => {
  const { data } = useGetSalesQuery();

  const [dateStart, setDateStart] = useState(new Date("2021-01-01"));
  const [dateEnd, setDateEnd] = useState(new Date("2021-02-02"));

  const [dailyDate] = useMemo(() => {
    if (!data) {
      return [];
    }
    const { dailyData } = data;
    const totalSalesLine = {
      id: "totalSales",
      // color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      // color: theme.palette.secondary[600],
      data: [],
    };

    Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
      const formattedDate = new Date(date);
      if (formattedDate >= dateStart && formattedDate <= dateEnd) {
        const parseDate = date.subString(date.indexof("-") + 1);

        totalSalesLine.data = [
          ...totalSalesLine.data,
          {
            x: parseDate,
            y: totalSales,
          },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          {
            x: parseDate,
            y: totalUnits,
          },
        ];
      }
    });
    const updatedData = [totalSalesLine, totalUnitsLine];
    console.log(totalSalesLine, totalUnitsLine);
    return [updatedData];
  }, [data, dateStart, dateEnd]);

  return <div>Daily</div>;
};

export default Daily;
