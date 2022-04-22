import Reviews from "./components/admin/reviews/Reviews";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sellers from "./components/admin/sellers/Sellers";
import "./App.css";
import AuthProtectet from "./components/authentication/AuthProtectet";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Orders from "./components/buyer/Orders";
import Cart from "./components/cart/Cart";
import BillingInfo from "./components/checkout/BillingInfo";
import Layout from "./components/layout/Layout";
import ProductDetails from "./components/product/ProductDetails";
import Products from "./components/product/Products";
import DashBoard from "./components/container/DashBoard";
import SellerDashBoard from "./components/seller/SellerDashboard";
import AddProduct from "./components/seller/AddProduct";
import SellerOrders from "./components/seller/Orders";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path='/unauthorized' element = {<h1>you are not authorized to see this page</h1>}/>

        <Route element={<AuthProtectet allowedRole="BUYER" />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="shop" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<BillingInfo />} />
          <Route path="orders" element={<Orders />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
        </Route>
        <Route element={<AuthProtectet allowedRole="BUYER" />}>
          <Route path="/sellers" element={<Sellers />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route element={<AuthProtectet allowedRole="BUYER" />}>
          <Route path="/products" element={<SellerDashBoard />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="seller/orders" element={<SellerOrders />} />
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
