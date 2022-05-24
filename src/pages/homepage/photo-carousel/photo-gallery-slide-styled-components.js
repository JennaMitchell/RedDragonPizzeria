import { styled } from "@mui/material/styles";

const PhotoGalleryImg = styled("img", {
  name: "PhotoGalleryImg",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.light,
  objectFit: "cover",
  position: "relative",
  opacity: 0,
  visibility: "hidden",
}));

const LeftBanner = styled("div", { name: "LeftBanner", slot: "Wrapper" })(
  ({ theme }) => ({
    width: "max(200px,200px)",
    height: "max(max-content,max-content)",
    backgroundColor: theme.palette.secondary.main,
    borderEndStartRadius: "20px",
    borderEndEndRadius: "20px",
    position: "absolute",
    top: "0px",
    left: "100px",
    zIndex: 2,
    padding: "10px 20px 10px 20px",
    boxShadow: "0 0 4px white",
    textAlign: "left",
    opacity: 0,
    visibility: "hidden",
  })
);
const RightBanner = styled("div", { name: "LeftBanner", slot: "Wrapper" })(
  ({ theme }) => ({
    width: "max(200px,200px)",
    height: "max(max-content,max-content)",
    backgroundColor: theme.palette.secondary.main,
    borderEndStartRadius: "20px",
    borderEndEndRadius: "20px",
    position: "absolute",
    top: "0px",
    right: "100px",
    zIndex: 2,
    padding: "10px 20px 10px 20px",
    boxShadow: "0 0 4px white",
    textAlign: "left",
    opacity: 0,
    visibility: "hidden",
  })
);

export { LeftBanner, RightBanner, PhotoGalleryImg };
