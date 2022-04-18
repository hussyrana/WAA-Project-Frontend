import React, { useRef } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import "./Signup.css";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    console.log(form["userType"].value);
    navigate("/login");
    
  };

  return (
    <div className="forms">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
        ref={formRef}
      >
        <Card sx={{ maxWidth: 400, top: 50, left: 50 }}>
          <Typography gutterBottom variant="h5" component="div" color="primary">
            Register
          </Typography>
          <TextField required id="fName" label="FirstName" />
          <TextField required id="lName" label="LastName" />
          <TextField required id="email" label="Email" type="email" />
          <TextField required id="Password" label="password" type="password" />
          <TextField
            required
            id="cPassword"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
          />
          <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="userType"
              defaultValue="top"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControlLabel
                value="buyer"
                control={<Radio />}
                label="Buyer"
                labelPlacement="start"
              />
              <FormControlLabel
                value="seller"
                control={<Radio />}
                label="Seller"
                labelPlacement="start"
              />
            </RadioGroup>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
            <Button
              type="submit"
              variant="contained"
              size="medium"
              onClick={handleSubmit}
            >
              Register
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default Signup;
