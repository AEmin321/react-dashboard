import Heading from "../components/Heading";
import { useGetProductsQuery } from "../state/apiSlice";
import Product from "../components/Product";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgress from "@mui/material/CircularProgress";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box margin="1.5rem 2rem">
      <Heading title="Products" subTitle="List of your products." />
      {data || !isLoading ? (
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNotMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              supply,
              stats,
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                description={description}
                price={price}
                rating={rating}
                category={category}
                supply={supply}
                stats={stats}
              />
            )
          )}
        </Box>
      ) : (
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
      )}
    </Box>
  );
};

export default Products;
