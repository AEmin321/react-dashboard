import Box from "@mui/material/Box";
import Heading from "../components/Heading";
import { useGetGeographyQuery } from "../state/apiSlice";
import { geoData } from "../data/geoData";
import { useTheme } from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import { ResponsiveChoropleth } from "@nivo/geo";

const Geography = () => {
  const { data } = useGetGeographyQuery();
  const theme = useTheme();

  return (
    <Box margin="1.5rem 2rem">
      <Heading title="Geography" subTitle="Check your most loyal customers" />
      <Box sx={{ height: "75vh" }}>
        {!data ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <ResponsiveChoropleth
            data={data}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="YlGn"
            domain={[0, 60]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={145}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor={{ theme: "background" }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
              {
                id: "gradient",
                type: "linearGradient",
                colors: [
                  {
                    offset: 0,
                    color: "#000",
                  },
                  {
                    offset: 100,
                    color: "inherit",
                  },
                ],
              },
            ]}
            fill={[
              {
                match: {
                  id: "CAN",
                },
                id: "dots",
              },
              {
                match: {
                  id: "CHN",
                },
                id: "lines",
              },
              {
                match: {
                  id: "ATA",
                },
                id: "gradient",
              },
            ]}
            legends={[
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.secondary[200],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#afafaf",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        )}
      </Box>
    </Box>
  );
};

export default Geography;
