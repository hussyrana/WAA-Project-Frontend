import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProtectet from "./components/authentication/AuthProtectet";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import OrderHistory from "./components/buyer/OrderHistory";
import Orders from "./components/buyer/Orders";
import Cart from "./components/cart/Cart";
import BillingInfo from "./components/checkout/BillingInfo";
import Layout from "./components/layout/Layout";
import ProductDetails from "./components/product/ProductDetails";
import Products from "./components/product/Products";
import DashBoard from "./container/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        <Route element={<AuthProtectet />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />}/>
          <Route path="checkout" element={<BillingInfo />} />
          <Route path="orders" element={<Orders />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
