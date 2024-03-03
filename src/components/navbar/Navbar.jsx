import React from "react";
import Badge from "@mui/material/Badge";
import { Favorite, ShoppingCart } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FilteredDataContext } from "../../contexts/FilteredDataContext";
import { CartDataContext } from "../../contexts/cartDataContext";
import { WishlistDataContext } from "../../contexts/wishlistDataContext";
import { styled } from "@mui/material/styles";
import { Box, Button, Grid, OutlinedInput, useMediaQuery } from "@mui/material";
import { theme } from "../../utils/theme";

const NavContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#3b82f6",
  height: "70px",
  [theme.breakpoints.down("md")]: {
    padding: `${theme.spacing(2)} 0px`,
    height: "auto",
  },
}));

const NavInnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1280px",
  width: "90%",
  margin: "auto",
}));

const LeftContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const MiddleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "fit-content",
}));

const RightContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: theme.spacing(3),
  width: "100%",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const NavLink = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  textDecoration: "None",
  color: "#fff",
}));

const SiteNameText = styled(Link)(({ theme }) => ({
  fontSize: "26px",
  fontWeight: "700",
  fontStyle: "oblique",
  textDecoration: "None",
  color: "#fff",
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#000",
  padding: `${theme.spacing(0.5)} ${theme.spacing(2.5)}`,
  background: "white",
  fontWeight: "500",
  "&:hover": {
    color: "#000",
    backgroundColor: "#fff",
  },
}));

const ProductsButton = styled(Button)(({ theme }) => ({
  color: "#000",
  padding: `${theme.spacing(0.5)} ${theme.spacing(2.5)}`,
  background: "white",
  fontWeight: "500",
  "&:hover": {
    color: "#000",
    backgroundColor: "#fff",
  },
}));

const SearchField = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  height: "35px",
  backgroundColor: "#fff",
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { state, dispatch } = useContext(FilteredDataContext);
  const { cartData } = useContext(CartDataContext);
  const { wishlistData } = useContext(WishlistDataContext);

  return (
    <NavContainer>
      <NavInnerContainer>
        <Grid container spacing={matches && 3}>
          <Grid item xs={12} sm={12} md={4}>
            <LeftContainer>
              <NavLink
                onClick={() => {
                  navigate("/");
                }}
              >
                <SiteNameText variant="h4">Shop More</SiteNameText>
              </NavLink>
            </LeftContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MiddleContainer>
              <SearchField
                type="text"
                placeholder="Search items"
                value={state.searchInput}
                onChange={(event) => {
                  dispatch({ type: "USER_INPUT", payload: event.target.value });
                }}
              />
            </MiddleContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RightContainer>
              {state?.userDetails ? (
                <NavLink to="/user-profile">Profile</NavLink>
              ) : (
                <LoginButton
                  color="primary"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </LoginButton>
              )}
              <ProductsButton
                onClick={() => {
                  navigate("/products");
                }}
              >
                Shop
              </ProductsButton>
              <Badge
                badgeContent={state?.userDetails ? wishlistData.length : null}
                color="error"
              >
                <Favorite
                  sx={{ color: "#fff", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/wishlist");
                  }}
                />
              </Badge>
              <Badge
                badgeContent={state?.userDetails ? cartData.length : null}
                color="error"
              >
                <ShoppingCart
                  sx={{ color: "#fff", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/cart");
                  }}
                />
              </Badge>
            </RightContainer>
          </Grid>
        </Grid>
      </NavInnerContainer>
    </NavContainer>
  );
};

export default Navbar;
