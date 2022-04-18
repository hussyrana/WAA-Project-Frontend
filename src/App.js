import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProtectet from "./components/authentication/AuthProtectet";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Layout from "./components/layout/Layout";
import Test from "./components/product/Test";
import AddProduct from "./components/seller/AddPorduct";
import DashBoard from "./container/DashBoard";
import SellerDashBoard from "./container/SellerDashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        
        <Route element={<AuthProtectet/>}>
          <Route path="/" element={<DashBoard />} />
          <Route path="seller" element={<SellerDashBoard />}>
            <Route path="test" element={<Test />} />
          </Route>
          <Route path="addProduct" element={<AddProduct />} />
          </Route>
      </Route>
    </Routes>
  );
}

export default App;
