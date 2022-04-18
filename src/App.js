import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProtectet from "./components/authentication/AuthProtectet";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Layout from "./components/layout/Layout";
import DashBoard from "./container/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        
        <Route element={<AuthProtectet/>}>
          <Route path="/" element={<DashBoard />} />
          </Route>
      </Route>
    </Routes>
  );
}

export default App;
