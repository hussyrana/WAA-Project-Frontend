import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
const Review = (props) => {
  return (
    <Stack divider={<Divider flexItem  orientation="horizontal" />} spacing={2} sx={{mb:2}}>
      <Item>
        <Typography color='black' variant="subtitle1">{props.name}</Typography>
        <Typography variant="body1">{props.comment}</Typography>
        
      </Item>
    </Stack>
  );
};

export default Review;
