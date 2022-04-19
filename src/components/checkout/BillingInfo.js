import * as React from "react";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik, Form, FormikProvider } from "formik";
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
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const ShippingBillingSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    address: Yup.string()
      .min(2, "Too Short!")
      .required("Street Name required"),
    city: Yup.string().required("City is required"),
    zip: Yup.string()
      .min(5, "Zip Code must have 5 digits")
      .max(5, "Zip Code must have 5 digits")
      .required("Zip Code is required"),
    phone: Yup.string().required("Phone number is required").matches(phoneRegExp, 'Phone number is not valid'),
    firstNameBilling: Yup.string().required("First name is required"),
    lastNameBilling: Yup.string().required("Last name is required"),
    addressBilling: Yup.string()
      .min(2, "Too Short!")
      .required("Street Name required"),
    cityBilling: Yup.string().required("City is required"),
    zipBilling: Yup.string()
      .min(5, "Zip Code must have 5 digits")
      .max(5, "Zip Code must have 5 digits")
      .required("Zip Code is required"),
    phoneBilling: Yup.string().required("Phone number is required").matches(phoneRegExp, 'Phone number is not valid'),
  });

  const formik = useFormik({
    initialValues: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zip: "",
        state: "",
        phone: "",
        firstNameBilling: "",
        lastNameBilling: "",
        addressBilling: "",
        cityBilling: "",
        zipBilling: "",
        stateBilling: "",
        phoneBilling: "",
    },
    validationSchema: ShippingBillingSchema,
    onSubmit: (values) => {
        console.log("Trying to register a product "+values.firstName);

        const data = {
          firstName: formik.values.firstName,
          lastName: formik.values.lastName,
          address: formik.values.address,
          city: formik.values.city,
          zipCode: formik.values.zipCode,
          state: formik.values.state,
          phone: formik.values.phone,
          
      };

      const dataBilling = {
        firstNameBilling: formik.values.firstNameBilling,
        lastNameBilling: formik.values.lastNameBilling,
        addressBilling: formik.values.addressBilling,
        cityBilling: formik.values.cityBilling,
        zipCodeBilling: formik.values.zipCodeBilling,
        stateBilling: formik.values.stateBilling,
        phoneBilling: formik.values.phoneBilling,
      }

      console.log("Trying to register a product "+ data);
      setFinish(true)
      // const headers = {
      //   "Access-Control-Allow-Origin": "*",
      // };

      //console.log("token is \n" + TokenService.getToken());

      //console.log("inside user registration-POST request");

      //console.log(productAPI);

      

      
    },
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;
  return !finish ? (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
    >
      {/*<Card
        component="form"
        noValidate
        autoComplete="off"
        sx={{ maxWidth: 800, top: 50, left: 50 }}
    >*/}
        <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h4">Shipping Information</Typography>
        <CardContent>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField id="fName" label="FirstName" variant="outlined"
            {...getFieldProps("firstName")} 
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName} />

            <TextField id="lName" label="LastName" variant="outlined" 
            {...getFieldProps("lastName")} 
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={touched.lastName && errors.lastName} />
            
            <TextField id="address" label="Street Address" variant="outlined"
             {...getFieldProps("address")}
             error={Boolean(touched.address && errors.address)}
             helperText={touched.address && errors.address}/>

            <TextField id="address2" label="Apt. Unit" variant="outlined" />
            <TextField id="city" label="City" variant="outlined" 
            {...getFieldProps("city")}
            error={Boolean(touched.city && errors.city)}
            helperText={touched.city && errors.city}/>

            <TextField id="state" label="State" variant="outlined" 
            {...getFieldProps("state")}
            error={Boolean(touched.state && errors.state)}
            helperText={touched.state && errors.state}/>

            <TextField id="zip" label="Zip" variant="outlined" 
            {...getFieldProps("zip")}
            error={Boolean(touched.zip && errors.zip)}
            helperText={touched.zip && errors.zip}/>

            <TextField id="country" label="Country" variant="outlined" 
            {...getFieldProps("country")}
            error={Boolean(touched.country && errors.country)}
            helperText={touched.country && errors.country}/>

            <TextField id="phone" label="Phone" variant="outlined"
            {...getFieldProps("phone")}
            error={Boolean(touched.phone && errors.phone)}
            helperText={touched.phone && errors.phone} />

            
          </Box>
          <Typography variant="h4">Billing Information</Typography>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField id="fName" label="FirstName" variant="outlined"
            {...getFieldProps("firstNameBilling")} 
            error={Boolean(touched.firstNameBilling && errors.firstNameBilling)}
            helperText={touched.firstNameBilling && errors.firstNameBilling} />

            <TextField id="lName" label="LastName" variant="outlined" 
            {...getFieldProps("lastNameBilling")} 
            error={Boolean(touched.lastNameBilling && errors.lastNameBilling)}
            helperText={touched.lastNameBilling && errors.lastNameBilling} />
            
            <TextField id="address" label="Street Address" variant="outlined"
             {...getFieldProps("addressBilling")}
             error={Boolean(touched.addressBilling && errors.addressBilling)}
             helperText={touched.addressBilling && errors.addressBilling}/>

            <TextField id="address2" label="Apt. Unit" variant="outlined" />
            <TextField id="cityBilling" label="City" variant="outlined" 
            {...getFieldProps("cityBilling")}
            error={Boolean(touched.cityBilling && errors.cityBilling)}
            helperText={touched.cityBilling && errors.cityBilling}/>

            <TextField id="state" label="State" variant="outlined" 
            {...getFieldProps("stateBilling")}
            error={Boolean(touched.stateBilling && errors.stateBilling)}
            helperText={touched.stateBilling && errors.stateBilling}/>

            <TextField id="zip" label="Zip" variant="outlined" 
            {...getFieldProps("zipBilling")}
            error={Boolean(touched.zipBilling && errors.zipBilling)}
            helperText={touched.zipBilling && errors.zipBilling}/>

            <TextField id="country" label="Country" variant="outlined" 
            {...getFieldProps("countryBilling")}
            error={Boolean(touched.countryBilling && errors.countryBilling)}
            helperText={touched.countryBilling && errors.countryBilling}/>

            <TextField id="phone" label="Phone" variant="outlined"
            {...getFieldProps("phoneBilling")}
            error={Boolean(touched.phoneBilling && errors.phoneBilling)}
            helperText={touched.phoneBilling && errors.phoneBilling} />

            
          </Box>
          <Button
              type="submit"
              variant="contained"
              size="medium"
            >
              Make Payment
            </Button>
        </CardContent>
        </Form>
    </FormikProvider>
      {/*</Card>*/}
    </Container>
  ) : (
    <Finish />
  );
}
