import { AppBar } from "@mui/material";
import {
  LogoTitleContainer,
  LogoImage,
  LogoContainer,
  StyledToolBar,
  RoofSvgContainer,
} from "./nav-bar-styled-components";
import logo from "../../img/logo/logo.png";
import { Typography } from "@mui/material";
import NavButtons from "./nav-buttons";
import { useSelector } from "react-redux";
import roof from "../../img/homepage/roof.png";

const NavBar = () => {
  const cartButtonClicked = useSelector((state) => state.cartButtonClicked);
  return (
    <>
      <AppBar
        color="primary"
        sx={{
          position: "relative",
          zIndex: 3,
          "@media (max-width:1050px)": {
            minHeight: "80px",
          },
          "@media (max-width:880px)": {
            minHeight: "60px",
          },
        }}
        position="relative"
      >
        <StyledToolBar sx={{ zIndex: 3 }}>
          <LogoTitleContainer>
            <LogoContainer
              sx={{
                "@media (max-width:1300px)": {
                  marginLeft: "0px",
                },
              }}
            >
              <LogoImage alt="logo" src={logo} />
            </LogoContainer>
            <Typography
              variant="h4"
              sx={{
                "@media (max-width:1300px)": {
                  fontSize: "28px",
                },
                "@media (max-width:1050px)": {
                  fontSize: "22px",
                },
                "@media (max-width:880px)": {
                  fontSize: "18px",
                },
                "@media (max-width:780px)": {
                  fontSize: "14px",
                },
                "@media (max-width:650px)": {
                  fontSize: "12px",
                },
              }}
            >
              Red Dragon Pizzeria
            </Typography>
          </LogoTitleContainer>
          <NavButtons />
        </StyledToolBar>
        <RoofSvgContainer
          src={roof}
          alt="roof"
          sx={{
            zIndex: `${cartButtonClicked && `3`}`,
          }}
        />
      </AppBar>
    </>
  );
};

export default NavBar;
