import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Order from './Order';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const OrderHistory = (
//    {
//   products,
//   showAlert,
//   dispatch,
//   setCartItems,
//   cartItems,
//   total,
//   setFinished,
// }
) => {
    const products = [
        {id:1, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
        {id:2, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
        
    ]
    const [orderStatus, SetOrderStatus] = useState("Shipped");
    const handleChange = (e) => {
        SetOrderStatus(e.target.value);
        console.log("order status "+ orderStatus)
    };
  return (
    <div>
      <Grid container spacing={0} align='center' sx={{ mt: 5, pl: 5, pr: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'></TableCell>
                <TableCell align='center'>Product Name</TableCell>
                <TableCell align='center'>Product Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <Order
                  key={product.id}
                  {...product}
                //   dispatch={dispatch}
                //   totalItems={cartItems}
                //   handleRemove={setCartItems}
                />
              ))}
            </TableBody>
          </Table>
          <Grid
          container
          spacing={0}
          sx={{ mt: 1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid item xs={3} align='center'>
            <h5>Total: $3600</h5>
          </Grid>
          <Grid item xs={3} align='center'>
            
          </Grid>
          <Grid item xs={3} align='center'>
            
          <Box >
        <FormControl sx={{ width: "140px"}} >
            <InputLabel id="demo-simple-select-label">Order Status</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={orderStatus}
            label="Order Status"
            onChange={handleChange}
            >
            <MenuItem value={"Shipped"}>Shipped</MenuItem>
            <MenuItem value={"On-the-way"}>On-the-way</MenuItem>
            <MenuItem value={"Delivered"}>Delivered</MenuItem>
            </Select>
        </FormControl>
    </Box>
            
          </Grid>
          <Grid item xs={3} align='center'>
            <Button
               variant='outlined'
               color='error'
               onClick={() => {
                 //handleRemove(totalItems - 1);
                 // dispatch({
                 //   type: 'REMOVE_ITEM',
                 //   payload: id,
                 // });
               }}
             >
               Cancel Order
             </Button>
         
       </Grid>
        </Grid>
        </TableContainer>
      </Grid>
    </div>
  );
};

export default OrderHistory;