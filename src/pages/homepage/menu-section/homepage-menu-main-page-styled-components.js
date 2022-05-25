import { styled } from "@mui/material/styles";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: theme.palette.primary.light,
  border: "none",
  display: "grid",
  placeItems: "center",
  position: "relative",
}));

const MenuContainer = styled("div", {
  name: "MenuContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(1000px,1000px)",
  height: "max(max-content,max-content)",
  backgroundColor: theme.palette.primary.light,
  border: "none",
  display: "grid",
  placeItems: "center",
  position: "relative",
  gridTemplateRows: "repeat(4, max-content)",
  marginTop: "20px",
  marginBottom: "20px",
}));

const MenuSelectorContainer = styled("div", {
  name: "MenuSelectorContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(50px,50px)",
  backgroundColor: theme.palette.secondary.main,
  border: "none",
  borderRadius: "25px",
  display: "grid",
  placeItems: "center",
  gridTemplateColumns: "repeat(5,1fr)",
  position: "relative",
}));
const MenuSelectorButton = styled("button", {
  name: "MenuSelectorButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  backgroundColor: "inherit",
  color: theme.palette.secondary.light,
  border: "none",
  borderRadius: "25px",
  display: "grid",
  placeItems: "center",
  fontSize: "20px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));
const LogoContainer = styled("div", {
  name: "LogoContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100px,100px)",
  height: "max(100px,100px)",
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  borderRadius: "50%",
  backgroundColor: theme.palette.secondary.main,
}));
const LogoImage = styled("img", {
  name: "LogoImage",
  slot: "Wrapper",
})({
  width: "max(90%,90%)",
  height: "max(90%,90%)",
  borderRadius: "50%",
});

export {
  TopContainer,
  MenuContainer,
  MenuSelectorContainer,
  MenuSelectorButton,
  LogoContainer,
  LogoImage,
};
