import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Review from "./Review";
import { reviews } from "../../../data";

//TODO need to get the reviews from the database
const Reviews = () => {
  return (
    <div>
      <Grid container spacing={0} align="center" sx={{ mt: 5, pl: 5, pr: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Buyer</TableCell>
                <TableCell align="center">Comment</TableCell>
                <TableCell align="center">Approval</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews.map((review) => (
                <Review
                  key={review.id}
                  {...review}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
};

export default Reviews;
