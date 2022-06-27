import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledButton = styled(Button, {
  name: "StyledButton",
  slot: "Wrapper",
})(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.light,
  textDecoration: "none",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
  },
}));
const MenuSelectorContainer = styled("div", {
  name: "MenuSelectorContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(50px,50px)",
  backgroundColor: theme.palette.secondary.dark,
  border: "none",
  borderRadius: "25px",
  display: "grid",
  placeItems: "center",
  gridTemplateColumns: "repeat(5,1fr)",
  position: "relative",
}));
const StyledInActiveNavLink = styled(NavLink, {
  name: "StyledInActiveNavLink",
  slot: "Wrapper",
})(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.light,
  width: "max(max-content,max-content)",
  padding: "10px 15px 10px 15px",
  borderRadius: "5px",
  fontSize: "16px",
  textDecoration: "none",
  textTransform: "uppercase",
  boxSizing: "content-box",

  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    boxShadow: "0 2px 3px black",
  },
  "@media (max-width:1200px)": {
    fontSize: "12px",
  },
}));

const StyledActiveNavLink = styled(NavLink, {
  name: "StyledActiveNavLink",
  slot: "Wrapper",
})(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.light,
  width: "max(max-content,max-content)",
  padding: "10px 15px 10px 15px",
  borderRadius: "5px",
  fontSize: "16px",
  textDecoration: "none",
  textTransform: "uppercase",
  boxSizing: "content-box",

  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    boxShadow: "0 2px 3px black",
  },
  "@media (max-width:1200px)": {
    fontSize: "12px",
  },
}));
export {
  StyledButton,
  MenuSelectorContainer,
  StyledInActiveNavLink,
  StyledActiveNavLink,
};
