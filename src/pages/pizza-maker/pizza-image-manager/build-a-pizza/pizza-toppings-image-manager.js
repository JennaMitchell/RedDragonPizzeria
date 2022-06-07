import { styled } from "@mui/material";
const PizzaToppingsContainer = styled("img", {
  name: "TopImageContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(82%,82%)",
  height: "max(82%,82%)",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  transition: "all 2s",
  zIndex: 5,
}));

const PizzaToppingsImageManager = () => {};
export default PizzaToppingsImageManager;
