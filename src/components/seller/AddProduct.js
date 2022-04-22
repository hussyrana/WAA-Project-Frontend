import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Stack, TextField, TextareaAutosize } from "@mui/material";

const AddProduct = () => {
  const RegisterSchema = Yup.object().shape({
    productName: Yup.string().required("Product name is required"),
    description: Yup.string().required("Product description is required"),
    stockAmount: Yup.string().required("Amount in Stock is required"),
    price: Yup.string().required("Price is required"),
  });

  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      stockAmount: "",
      price: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      console.log("Trying to register a product");

      const data = {
        name: formik.values.productName,
        description: formik.values.description,
        isActive: true,
        quantity: formik.values.stockAmount,
        price: formik.values.price,
        orderItems: [],
        images: [],
        cartItems: [],
      };

      console.log(data);
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;
  return (
    <Container>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" gutterBottom>
          Please Enter Product Details
        </Typography>
      </Box>

      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                fullWidth
                label="Product Name"
                {...getFieldProps("productName")}
                error={Boolean(touched.productName && errors.productName)}
                helperText={touched.productName && errors.productName}
              />

              <TextField
                fullWidth
                label="Price"
                {...getFieldProps("price")}
                error={Boolean(touched.price && errors.price)}
                helperText={touched.price && errors.price}
              />
            </Stack>

            <TextareaAutosize
              // fullWidth
              placeholder="Product Description"
              area-label="Product Description"
              style={{ minHeight: 100 }}
              {...getFieldProps("description")}
              error={
                Boolean(touched.description && errors.description)
                  ? touched.description && errors.description
                  : ""
              }
              //  helperText={touched.description && errors.description}
            />

            <TextField
              fullWidth
              label="Stock Amount"
              {...getFieldProps("stockAmount")}
              error={Boolean(touched.stockAmount && errors.stockAmount)}
              helpertext={touched.stockAmount && errors.stockAmount}
            />
            <Button fullWidth size="large" type="submit" variant="contained">
              Add Product
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </Container>
  );
};

export default AddProduct;
