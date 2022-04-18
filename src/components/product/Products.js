import React from 'react';
import Product from './Product';
import { Grid } from '@mui/material';

const Products = (
    // { 
    //     products,
    //      cartItems, 
    //      setCartItems, 
    //      dispatch 
    //     }
    ) => {
    const products = [
        {id:1, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
        {id:1, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
        {id:1, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
        {id:1, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
        {id:1, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
        {id:1, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
    ]
  return (
    <main>
      <Grid
        container
        align='center'
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 1, md: 12 }}
      >
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
          />
        ))}
      </Grid>
    </main>
  );
};

export default Products;
