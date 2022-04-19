import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

const Review = ({ id, userId, productId, comment }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        Buyer name
        {/* TODO need to get the BuyerName with buyerId from the db */}
      </TableCell>
      <TableCell align="center">
        {comment}
      </TableCell>
      <TableCell align="center">
        <Button sx={{ mt: 1, ml: 1 }} onClick={() => {}}>
          Approve
          {/* TODO need to implement the functionality for approval on click */}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Review;
