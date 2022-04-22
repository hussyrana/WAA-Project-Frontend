import React, { useEffect, useMemo, useState } from "react";
import Product from "./Product";
import { Grid } from "@mui/material";
import { products } from "../../data";
import api from "../../api/api";

const Products = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(()=>{
  //   api.get('/products').then(res=>{
  //     setProducts(res.data);
  //     console.log(res.data);
  //   }).catch(err=>{
  //     console.log(err.message);
  //   })
  // }, [])

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
