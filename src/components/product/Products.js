import React from "react";
import Product from "./Product";
import { Grid } from "@mui/material";
import { products } from "../../data";
const Products = () => {
  return (
    <main>
      <Grid
        container
        align="center"
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 1, md: 12 }}
      >
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Grid>
    </main>
  );
};

export default Products;
