import React from "react";
import { Box, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import ProductReviews from "./review/ProductReviews";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/cart";

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(params.id);

  const handlePurchase = () => {
    //TODO get pruduct here by product id and add it to the cart
    dispatch(
      increment({
        id: 25,
        name: "productname",
        description: "description",
        price: 100,
        image:
          "https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg",
      })
    );
    navigate('/cart');
  };
  return (
    <>
      <Container>
        <Card variant="outlined" sx={{ mt: 3, mb: 5, display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardMedia
              component="img"
              image={
                "https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg"
              }
              alt="name of product"
              height="500"
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: { md: "column" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                Iphone
              </Typography>
              <Typography variant="body2" color="text.secondary">
                nothing sjadfk jkasdnf askf askbfk ksabfk kasbfk kasbfak kabk
                kafbk akfb akfbk kabf akfb akfb akfb afkb afkbb
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                style={{ fontWeight: "bolder" }}
              >
                $100
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                style={{ fontWeight: "bolder" }}
                sx={{ mt: 3 }}
              >
                Seller: awyn atn
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                flexDirection: { md: "row" },
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  //   handlePurchase(totalProducts + 1);
                  //   dispatch({ type: 'PURCHASE_ITEM', payload: newProduct });
                }}
              >
                Follow
              </Button>
              <Button size="small" variant="contained" onClick={handlePurchase}>
                Purchase
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Container>
      <ProductReviews />
    </>
  );
};

export default ProductDetails;
