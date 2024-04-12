import React, { useState, useMemo } from "react";
import { useGetSalesQuery } from "../state/apiSlice";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useTheme } from "@mui/material";
import Loader from "../components/Loader";
import { ResponsiveLine } from "@nivo/line";
import Heading from "../components/Heading";
import Box from "@mui/material/Box";

const Daily = () => {
  const { data } = useGetSalesQuery();

  const [dateStart, setDateStart] = useState(new Date("2021-01-01"));
  const [dateEnd, setDateEnd] = useState(new Date("2021-02-02"));

  const [dailyData] = useMemo(() => {
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
        const parseDate = date.substring(date.indexOf("-") + 1);

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
    console.log(updatedData);
    return [updatedData];
  }, [data, dateStart, dateEnd]);

  return (
    <Box margin="1.5rem 2rem">
      <Heading title="Daily" subTitle="Analize your daily sales and units" />
      <Box sx={{ height: "70vh" }}>
        <Box display="flex" justifyContent="flex-end">
          <DatePicker
            selected={dateStart}
            onChange={(date) => setDateStart(date)}
            selectsStart
            startDate={dateStart}
            endDate={dateEnd}
          />
          <DatePicker
            selected={dateEnd}
            onChange={(date) => setDateEnd(date)}
            selectsEnd
            startDate={dateStart}
            endDate={dateEnd}
            minDate={dateStart}
          />
        </Box>
        {data ? (
          <ResponsiveLine
            data={dailyData}
            margin={{ top: 50, right: 80, bottom: 70, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            yFormat=" >-.2f"
            enableArea={false}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,
              legend: "Month",
              legendOffset: 56,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Total",
              legendOffset: -60,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            enableGridX={false}
            enableGridY={false}
            colors={{ scheme: "blue_green" }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: 50,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default Daily;
