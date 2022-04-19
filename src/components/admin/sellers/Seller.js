import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

const Seller = ({ id, name, company, phone, address }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="center">{company}</TableCell>
      <TableCell align="center">{phone}</TableCell>
      <TableCell align="center">{address}</TableCell>
      <TableCell align="center">
        <Button sx={{ mt: 1, ml: 1 }} onClick={() => {}}>
          Approve
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Seller;
