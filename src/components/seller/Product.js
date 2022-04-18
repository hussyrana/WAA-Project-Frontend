import { Box, Card, Link, Typography, Stack, Switch, Divider, Chip } from "@mui/material";
import { Grid } from '@mui/material';
import { Link as RouterLink, Navigate, Route, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

const ProductImgStyle = styled("img")({
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
  });


const Product = ({ product, classes }) => {
    const { id, name, price, priceSale } = product;
    const navigate = useNavigate()
    return(
        <Grid md={12} item >
        <Card sx={{  borderRadius: 3, margin: 2, display: 'flex' }}> 
            <CardMedia
            component="img"
            sx={{ width: 200 }}
            src={`https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg`}
            alt="Live from space album cover"
        />
        <Stack spacing={2} sx={{ p: 3 }}>
          <Link to={'' +id} color="inherit" underline="hover" component={RouterLink} >
  {/*         
          <Link to={{ 
    pathname: '' +id, 
    search: `choosenDog=${JSON.stringify({ ...product })}`
  }}
          
  color="inherit" underline="hover" component={RouterLink} > */}
  
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Link>
  
          <Stack spacing={2} sx={{ p: 3 }}>
            <Typography variant="subtitle1">
              {price}
            </Typography>
          </Stack>
          </Stack>
          <Grid item xs={12}>

          <CardActions
            justifyContent="flex-end"
            style={{justifyContent: "flex-end", display: "flex"}}
            
          >
          <Button
            size='small'
            variant='contained'
            onClick={() => {
                navigate('/addProduct');
            //   handlePurchase(totalProducts + 1);
            //   dispatch({ type: 'PURCHASE_ITEM', payload: newProduct });
            }}
          >
              Editt
          </Button>
          <Button
            size='small'
            variant='contained'
            onClick={() => {
                window.confirm("Are you sure to delete this product?")
            //   handlePurchase(totalProducts + 1);
            //   dispatch({ type: 'PURCHASE_ITEM', payload: newProduct });
            }}
          >
            <Link
              to='/remove'
              style={{
                textDecoration: 'none',
                color: '#fff',
              }}
            >
              Delete
            </Link>
          </Button>
      
   </CardActions>
          </Grid>
          
      </Card>
      </Grid>
    );

}

export default Product;