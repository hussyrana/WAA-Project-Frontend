import React, { useEffect } from 'react';
import CartProduct from './CartProduct';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalPrice } from '../../redux/cart';

const Cart = (
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
  const {products, totalPrice} = useSelector(state=>state.cart)
  const dispatch = useDispatch();
  const totalPricee = products.reduce((sum, p)=>{
   return +sum + +p.price;
  }, [0]);
  useEffect(()=>{
    dispatch(setTotalPrice(totalPricee));
  },[totalPricee, dispatch])
  return (
    <div>
      <Grid container spacing={0} align='center' sx={{ mt: 5, pl: 5, pr: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Image</TableCell>
                <TableCell align='center'>Product Name</TableCell>
                <TableCell align='center'>Product Price</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <CartProduct
                  key={product.id}
                  {...product}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid
          container
          spacing={0}
          sx={{ mt: 1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid item xs={6} align='left'>
            <h3>Total: ${totalPrice}</h3>
          </Grid>
          <Grid item xs={6} align='right'>
            {true ? (
              <Button
                variant='contained'
                onClick={() => {
                  //setFinished(true);
                }}
              >
                <Link
                  to='/checkout'
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                  }}
                >
                  Checkout
                </Link>
              </Button>
            ) : (
              ''
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
