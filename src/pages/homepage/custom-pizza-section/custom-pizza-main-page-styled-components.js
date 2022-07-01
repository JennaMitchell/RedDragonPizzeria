import { styled } from "@mui/material/styles";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "min(max-content,800px)",
  backgroundColor: theme.palette.primary.main,
  border: "none",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  placeItems: "center",
  position: "relative",
}));
const TextSide = styled("div", {
  name: "TextSide",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "min(max-content,380px)",
  height: "max(max-content,max-content)",

  border: "none",
  display: "grid",
  gridTemplateRows: "max-content max-content",
  placeItems: "center",
  position: "relative",
}));

const PhotoSide = styled("div", {
  name: "PhotoSide",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "min(80%,80%)",
  height: "min(80%,80%)",

  border: "none",
  display: "grid",
  gridTemplateRows: "max-content max-content",
  placeItems: "center",
  position: "relative",
}));
const ImageContainer = styled("img", {
  name: "ImageContainer",
  slot: "Wrapper",
})(() => ({
  width: "min(100%,100%)",
  height: "min(100%,100%)",
  objectFit: "cover",
}));

export { TopContainer, TextSide, PhotoSide, ImageContainer };
