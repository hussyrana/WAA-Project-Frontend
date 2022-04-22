import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/cart";

const Product = ({ id, title, description, price, image }) => {

  const dispatch = useDispatch();
  return (
    <Grid item xs={4}>
      <Card variant="outlined" sx={{ maxWidth: 345, mt: 3, mb: 5 }}>
        <Link to={`product-details/${id}`} key={id} style={{textDecoration:'none'}}>
          <CardMedia
            component="img"
            image={image}
            alt="name of product"
            height="250"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              style={{ fontWeight: "bolder" }}
            >
              ${price}
            </Typography>
          </CardContent>
        </Link>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              //   handleAddToCart(totalProducts + 1);
              //   dispatch({ type: 'PURCHASE_ITEM', payload: newProduct });
              dispatch(increment({ id, title, description, price, image }));
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
