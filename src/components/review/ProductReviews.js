import { Container, Typography } from "@mui/material";
import React from "react";
import Review from "./Review";

const ProductReviews = () => {
  const reviews = [
    { name: "Jason Roy", comment: "kjdsakf askbk sukbk ksabfk kasb" },
    { name: "Jason Roy", comment: "kjdsakf askbk sgkbk ksabfk kasb" },
    { name: "Jason Roy", comment: "kjdsakf askbk snkbk ksabfk kasb" },
    { name: "Jason Roy", comment: "kjdsakf askbk sckbk ksabfk kasb" },
    { name: "Jason Roy", comment: "kjdsakf askbk sbkbk ksabfk kasb" },
  ];
  return (
    <Container>
      <Typography variant='h4' sx={{mb:1, textAlign:'left'}}>Reviews</Typography>
      {reviews.map((review) => (
        <Review key={review.comment} name={review.name} comment={review.comment} />
      ))}
    </Container>
  );
};

export default ProductReviews;
