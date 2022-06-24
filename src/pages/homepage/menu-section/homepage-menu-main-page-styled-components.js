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
  width: "min(1000px,80%)",
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
  backgroundColor: theme.palette.secondary.dark,
}));
const LogoImage = styled("img", {
  name: "LogoImage",
  slot: "Wrapper",
})({
  width: "max(70%,70%)",
  height: "max(70%,70%)",
});

export { TopContainer, MenuContainer, LogoContainer, LogoImage };
