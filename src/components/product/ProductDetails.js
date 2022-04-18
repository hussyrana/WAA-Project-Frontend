import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import ProductReviews from "../review/ProductReviews";

const ProductDetails = () => {
  const params = useParams();
  console.log(params.id);
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
                sx={{mt:3}}
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
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  //   handlePurchase(totalProducts + 1);
                  //   dispatch({ type: 'PURCHASE_ITEM', payload: newProduct });
                }}
              >
                <Link
                  to="/cart"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  Purchase
                </Link>
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
