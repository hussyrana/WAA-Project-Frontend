import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React, { useContext, useRef} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import authContext from "../../context/AuthProvider";
import "./Header.css";
import { useSelector } from "react-redux";

const buyerPages = ["Shop", "My Orders"];
const sellerPages = ["Products", "Orders"];
const adminPages = ["Sellers", "Reviews"];
const settings = ["Logout"];

function Header() {
  // const { auth, setAuth } = useContext(authContext);
  const userData = JSON.parse(localStorage.getItem("data"));
  let pages = null;
  if (userData.roles === "BUYER") {
    pages = buyerPages;
  } else if (userData.roles === "SELLER") {
    pages = sellerPages;
  } else if (userData.roles === "ADMIN") {
    pages = adminPages;
  }

  const navigate = useNavigate();
  const pageRef = useRef();
  const { cartCount } = useSelector((state) => state.cart);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (ev) => {
    setAnchorElNav(null);
    switch (ev.target.innerText) {
      case "SHOP":
        navigate("/");
        break;
      case "MY ORDERS":
        navigate("/orders");
        break;
      case "PRODUCTS":
        navigate("/products");
        break;
      case "ORDERS":
        navigate("seller/orders");
        break;
      case "SELLERS":
        navigate("/sellers");
        break;
      case "REVIEWS":
        navigate("/reviews");
        break;
      default:
    }
  };

  const handleCloseUserMenu = (value) => {
    setAnchorElUser(null);
    if (value === "Logout") {
      // setAuth(null);
      localStorage.clear();
      navigate("/login");
    }
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            WALLA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                return (
                  <MenuItem
                    ref={pageRef}
                    key={page}
                    name="page"
                    value={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {userData.roles==="BUYER" ? <Box sx={{ display: { xs: "none", md: "flex" }, mr: 5 }}>
            <IconButton
              onClick={handleCartClick}
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>:null}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  name={setting}
                  onClick={() => {
                    handleCloseUserMenu(setting);
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
