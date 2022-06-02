import { styled } from "@mui/material/styles";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "repeat(3,max-content)",
  placeItems: "center",
  position: "relative",
  fontFamily: "inherit",
}));

const CookieContainer = styled("img", {
  name: "CookieContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(300px,300px)",
  backgroundColor: "transparent",
  display: "grid",
  placeItems: "center",
  position: "relative",
}));
export { TopContainer, CookieContainer };
