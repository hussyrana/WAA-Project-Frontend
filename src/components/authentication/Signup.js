import React, { useRef } from "react";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
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

const RegisterSchema = Yup.object().shape({
  fName: Yup.string().required("First name is required"),
  lName: Yup.string().required("LastName is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  cPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      password: "",
      cPassword: "",
      userType: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      const data = {
        fName: formik.values.fName,
        lName: formik.values.lName,
        email: formik.values.email,
        password: formik.values.password,
        cPassword: formik.values.cPassword,
        userType: formik.values.userType,
      };
      console.log(data);
      //Todo Add data to the database
      navigate("/login");
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <div className="forms">
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <Card sx={{ maxWidth: 400, top: 50, left: 50 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="primary"
              >
                Register
              </Typography>
              <TextField
                required
                id="fName"
                label="FirstName"
                {...getFieldProps("fName")}
                error={Boolean(touched.fName && errors.fName)}
                helperText={touched.fName && errors.fName}
              />
              <TextField
                required
                id="lName"
                label="LastName"
                {...getFieldProps("lName")}
                error={Boolean(touched.lName && errors.lName)}
                helperText={touched.lName && errors.lName}
              />
              <TextField
                required
                id="email"
                label="Email"
                type="email"
                {...getFieldProps("email")}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                required
                id="Password"
                label="password"
                type="password"
                {...getFieldProps("password")}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
              <TextField
                required
                id="cPassword"
                label="Confirm Password"
                type="password"
                {...getFieldProps("cPassword")}
                error={Boolean(touched.cPassword && errors.cPassword)}
                helperText={(touched.cPassword && errors.cPassword)}
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
                  control={<Radio checked />}
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
                  // onClick={handleSubmit}
                >
                  Register
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default Signup;
