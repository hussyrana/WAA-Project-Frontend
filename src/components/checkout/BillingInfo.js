import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Finish from "./Finish";

export default function BillingInfo() {
  const [finish, setFinish] = React.useState(false);
  const handleSubmit = () => {
    setFinish(true);
  };
  return !finish ? (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
    >
      <Card
        component="form"
        noValidate
        autoComplete="off"
        sx={{ maxWidth: 800, top: 50, left: 50 }}
      >
        <Typography variant="h4">Shipping Information</Typography>
        <CardContent>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField id="fName" label="FirstName" variant="outlined" />
            <TextField id="lName" label="LastName" variant="outlined" />
            <TextField id="address" label="Street Address" variant="outlined" />
            <TextField id="address2" label="Apt. Unit" variant="outlined" />
            <TextField id="city" label="City" variant="outlined" />
            <TextField id="state" label="State" variant="outlined" />
            <TextField id="zip" label="Zip" variant="outlined" />
            <TextField id="country" label="Country" variant="outlined" />
            <TextField id="phone" label="Phone" variant="outlined" />

            
          </Box>
          <Typography variant="h4">Billing Information</Typography>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField id="fNameb" label="FirstName" variant="outlined" />
            <TextField id="lNameb" label="LastName" variant="outlined" />
            <TextField id="addressb" label="Street Address" variant="outlined" />
            <TextField id="address2b" label="Apt. Unit" variant="outlined" />
            <TextField id="cityb" label="City" variant="outlined" />
            <TextField id="stateb" label="State" variant="outlined" />
            <TextField id="zipb" label="Zip" variant="outlined" />
            <TextField id="countryb" label="Country" variant="outlined" />
            <TextField id="phoneb" label="Phone" variant="outlined" />

            
          </Box>
          <Button
              type="submit"
              variant="contained"
              size="medium"
              onClick={handleSubmit}
            >
              Make Payment
            </Button>
        </CardContent>
      </Card>
    </Container>
  ) : (
    <Finish />
  );
}
