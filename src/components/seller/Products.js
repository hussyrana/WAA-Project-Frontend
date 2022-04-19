import React from 'react';
import Product from '../seller/Product'
import {Grid,  Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import { Navigate, useNavigate } from 'react-router-dom';


const Products = (
    // { 
    //     products,
    //      cartItems, 
    //      setCartItems, 
    //      dispatch 
    //     }
    ) => {
    const products = [
        {id:1, name:'Iphone', description:"This is the description of the iphone product", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
        {id:1, name:'Iphone', description:"This is the description of the iphone product", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
        {id:1, name:'Iphone', description:"This is the description of the iphone product", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
        {id:1, name:'Iphone', description:"This is the description of the iphone product", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
        {id:1, name:'Iphone', description:"This is the description of the iphone product", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
        //{id:1, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
    ]

    const navigate = useNavigate()
  return (
    <main>
      <Grid
        container
        align='center'
        padding="20px 80px"
      >
          <div style={{ width: "100%", paddingTop: "10px", paddingRight: "10px"}}>
          <Fab color="primary" size="medium" aria-label="add" sx={{float: "right"}} onClick={() => { navigate('/addProduct'); }}>
            <AddIcon />
        </Fab>
          </div>
          
            
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </Grid>
    </main>
  );
};

export default Products;
