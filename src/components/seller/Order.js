import React, { useState } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Order = ({
  id,
  name,
  price,
  image,
  //dispatch,
  totalItems,
  //handleRemove,
}) => {
    const [orderStatus, SetOrderStatus] = useState("Shipped");
    const handleChange = (e) => {
        SetOrderStatus(e.target.value);
        console.log("order status "+ orderStatus)
    };
    /*const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
      };*/
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component='th' scope='row'>
        <img
          src={image}
          alt=''
          style={{
            width: '100px',
          }}
        />
      </TableCell>
      <TableCell align='center'>{name}</TableCell>
      <TableCell align='center'>{price}</TableCell>
    </TableRow>
  );
};

export default Order;