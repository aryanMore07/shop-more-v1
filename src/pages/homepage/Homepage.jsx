import React, { useEffect, useState } from "react";
import "./homepage.css";
import headerImage from "../../images/ecommerceHeaderImg.svg";
import cartImage from "../../images/addtocartImg.svg";
import { getAllCategory } from "../../data/data";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { FilteredDataContext } from "../../contexts/FilteredDataContext";
import { styled } from "@mui/material/styles";
import { Box, Card, Grid, Typography } from "@mui/material";
import { theme } from "../../utils/theme";

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

const MiddleContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "auto",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#374151",
  [theme.breakpoints.down("md")]: {
    height: "100%",
    padding: `${theme.spacing(4)} 0px`,
  },
}));

const MiddleInnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1280px",
  width: "90%",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LastContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "auto",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: `${theme.spacing(4)} 0px`,
  [theme.breakpoints.down("md")]: {
    height: "100%",
  },
}));

const LastInnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1280px",
  width: "90%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const LastComponentTitle = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  lineHeight: "36px",
  color: "#3b82f6",
  fontWeight: "bold",
  marginBottom: theme.spacing(6),
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
      <MiddleContainer>
        <MiddleInnerContainer>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <TextContainer>
                <h1 className="middle-tag-line">
                  Add your favorite items to the{" "}
                  <span className="middle-pointed-text">cart</span> and{" "}
                  <span className="middle-pointed-text">wishlist</span>
                </h1>
              </TextContainer>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ImageContainer>
                <ImageElement src={cartImage} alt="cart-pic" />
              </ImageContainer>
            </Grid>
          </Grid>
        </MiddleInnerContainer>
      </MiddleContainer>
      <LastContainer>
        <LastInnerContainer>
          <LastComponentTitle>Categories</LastComponentTitle>
          <Grid container spacing={2}>
            {categories.map((category) => {
              const { _id, categoryName, description, img } = category;
              return (
                <Grid item xs={12} sm={6} md={3} key={_id}>
                  <Card
                    sx={{
                      height: "100%",
                      padding: theme.spacing(2),
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      dispatch({
                        type: "CHECKBOX_INPUT",
                        payload: categoryName,
                      });
                      navigate("/products");
                    }}
                    key={_id}
                  >
                    <ImageContainer
                      sx={{
                        height: "150px",
                        [theme.breakpoints.down("sm")]: {
                          height: "200px",
                        },
                      }}
                    >
                      <ImageElement src={img} alt="product" />
                    </ImageContainer>
                    <h3>{categoryName}</h3>
                    <p>{description}</p>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </LastInnerContainer>
      </LastContainer>
    </div>
  );
};

export default Home;
