import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const Order = ({
  id,
  name,
  price,
  image,
}) => {
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
      <TableCell align='center'>
          <TextField name='review' label='write review' variant='outlined'></TextField>
        <Button
        varient='filled'
          sx={{mt:1, ml:1}}
          onClick={() => {
            
          }}
        >
          Post
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Order;
