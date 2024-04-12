import React, { useMemo } from "react";
import { useGetSalesQuery } from "../state/apiSlice";
import { useTheme } from "@mui/material";
import Loader from "../components/Loader";
import { ResponsiveLine } from "@nivo/line";

const OverviewChart = ({ isDash, filter }) => {
  const { isLoading, data } = useGetSalesQuery();
  const theme = useTheme();
  console.log(filter);

  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!data) {
      return <Loader />;
    }
    const { monthlyData } = data;
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

    Object.values(monthlyData).reduce(
      (count, { month, totalSales, totalUnits }) => {
        const sales = totalSales + count.sales;
        const units = totalUnits + count.units;

        totalSalesLine.data = [
          ...totalSalesLine.data,
          {
            x: month,
            y: sales,
          },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          {
            x: month,
            y: units,
          },
        ];

        return { sales: sales, units: units };
      },
      { sales: 0, units: 0 }
    );
    console.log(totalSalesLine, totalUnitsLine);
    return [[totalSalesLine], [totalUnitsLine]];
  }, [data]);

  if (!data || isLoading) {
    return <Loader />;
  }

  return (
    <ResponsiveLine
      data={filter === "sales" ? totalSalesLine : totalUnitsLine}
      margin={{ top: 20, right: 80, bottom: 50, left: 70 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      enableArea={isDash}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: (v) => {
          if (isDash) return v.slice(0, 3);
          return v;
        },
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDash ? "" : "Month",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDash
          ? ""
          : `Total ${filter === "sales" ? "Revenue" : "Units"} for Year`,
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
      legends={
        !isDash
          ? [
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
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
            ]
          : undefined
      }
    />
  );
};

export default OverviewChart;
