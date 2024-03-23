import React, { useEffect, useState } from "react";
import "./homepage.css";
import headerImage from "../../images/ecommerceHeaderImg.svg";
import cartImage from "../../images/addtocartImg.svg";
import { getAllCategory } from "../../data/data";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { FilteredDataContext } from "../../contexts/FilteredDataContext";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

const TopSection = styled(Box)(({ theme }) => ({
  maxWidth: "1280px",
  width: "90%",
  margin: "auto",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "100%",
    padding: `${theme.spacing(4)} 0px`,
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: `${theme.spacing(2)} 0px`,
}));

const ImageElement = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.between("sm", "md")]: {
    width: "70%",
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "48px",
  fontWeight: 700,
  lineHeight: "70px",
  textAlign: "right",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "40px",
    lineHeight: "55px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "45px",
  },
}));

const Home = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { dispatch } = useContext(FilteredDataContext);

  const fetchCategories = async () => {
    try {
      const categoriesData = await getAllCategory();
      setCategories(categoriesData.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="home-div">
      <TopSection>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <ImageContainer>
              <ImageElement src={headerImage} alt="header-img" />
            </ImageContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextContainer>
              <Heading>
                Shop with <span className="pointed-text"> ease,</span>
                <br /> from <span className="pointed-text">anywhere,</span>
                <br /> at any <span className="pointed-text">time!</span>
              </Heading>
            </TextContainer>
          </Grid>
        </Grid>
      </TopSection>
      <div className="middle-div">
        <h1 className="middle-tag-line">
          Add your favorite items to the{" "}
          <span className="middle-pointed-text">cart</span> and{" "}
          <span className="middle-pointed-text">wishlist</span>
        </h1>
        <img src={cartImage} alt="cart-pic" className="cart-home-img" />
      </div>
      <div className="last-div">
        <div className="categories-div">
          {categories.map((category) => {
            const { _id, categoryName, description, img } = category;
            return (
              <div
                onClick={() => {
                  dispatch({ type: "CHECKBOX_INPUT", payload: categoryName });
                  navigate("/products");
                }}
                className="category"
                key={_id}
              >
                <img className="product-img" src={img} alt="product" />
                <h3>{categoryName}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
