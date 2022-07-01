import { styled, Typography } from "@mui/material";
import horizontalPlank from "../../img/full-menu/plank.jpg";
import { NavLink } from "react-router-dom";

const BlackboardContainer = styled("div", {
  name: "BlackboardContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(1075px,1075px)",
  height: "max(200px,200px)",
  display: "grid",
  placeItems: "center",
  position: "relative",
  boxShadow: "0 0 10px black",
  border: "2px solid black",
  borderRadius: "20px",
  backgroundImage: `url(${horizontalPlank})`,
  "@media (max-width:1125px)": {
    width: "max(80%,80%)",
  },
  "@media (max-width:780px)": {
    width: "max(95%,95%)",
    height: "max(150px,150px)",
  },
  "@media(max-width:470px)": {
    height: "max(120px,120px)",
  },
}));

const MenuContainer = styled("div", {
  name: "MenuContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(calc(100% - 30px),calc(100% - 30px))",
  height: "max(calc(100% - 30px),calc(100% - 30px))",
  backgroundColor: theme.palette.secondary.dark,
  display: "grid",
  gridTemplateColumns: "repeat(6,15%)",
  alignItems: "center",
  justifyContent: "space-evenly",
  position: "relative",
  border: "2px solid black",
  borderRadius: "20px",
  fontFamily: "Fredericka the Great ,cursive",
  "@media(max-width:470px)": {
    width: "max(calc(100% - 20px),calc(100% - 20px))",
    height: "max(calc(100% - 20px),calc(100% - 20px))",
  },
}));

const StyledTypography = styled(Typography, {
  name: "StyledTypography",
  slot: "Wrapper",
})(({ theme }) => ({
  color: "inherit",
  fontFamily: "Fredericka the Great ,cursive",
  textAlign: "center",
  transition: "all 0.5s",
  zIndex: "2",
}));

const MenuButton = styled("div", {
  name: "MenuButton",
  slot: "Wrapper",
})(({ theme }) => ({
  color: theme.palette.secondary.light,
  backgroundColor: "inherit",
  fontFamily: "Fredericka the Great ,cursive",
  textAlign: "center",
  transition: "all 0.5s",
  position: "relative",
  display: "grid",
  placeItems: "center",
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  zIndex: "2",
  fontSize: "28px",
  borderRadius: "20px",
  "@media (max-width:1050px)": {
    fontSize: "24px",
  },
  "@media (max-width:940px)": {
    fontSize: "20px",
  },
  "@media (max-width:780px)": {
    fontSize: "18px",
  },
  "@media (max-width:640px)": {
    fontSize: "16px",
  },
  "@media (max-width:540px)": {
    fontSize: "14px",
  },

  "@media(max-width:470px)": {
    fontSize: "10px",
  },
}));
const MenuButtonImage = styled("img", {
  name: "MenuButtonImage",
  slot: "Wrapper",
})(() => ({
  width: "max(80%,80%)",
  height: "max(80%,80%)",
  position: "absolute",
  top: "0",
  left: "0",
  transform: "translate(10%,10%)",
  opacity: "0",
  transition: "all 0.75s",
  zIndex: "0",
  borderRadius: "20px",
  "&:hover": {
    opacity: "0.2",
  },
}));

const StyledNavLink = styled(NavLink, {
  name: "StyledNavLink ",
  slot: "Wrapper",
})(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: "28px",
  zIndex: 1,
  position: "relative",
  textDecoration: "none",
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  display: "grid",
  placeItems: "center",
  textAlign: "center",
  "@media (max-width:1050px)": {
    fontSize: "24px",
  },
  "@media (max-width:940px)": {
    fontSize: "20px",
  },
  "@media (max-width:780px)": {
    fontSize: "18px",
  },
  "@media (max-width:640px)": {
    fontSize: "16px",
  },
  "@media (max-width:540px)": {
    fontSize: "14px",
  },
  "@media(max-width:470px)": {
    fontSize: "10px",
  },
}));
export {
  BlackboardContainer,
  MenuContainer,
  StyledTypography,
  MenuButtonImage,
  MenuButton,
  StyledNavLink,
};
