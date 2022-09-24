import { styled } from "@mui/material/styles";

const PhotoGalleryImg = styled("img", {
  name: "PhotoGalleryImg",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "min(100%,100%)",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.light,
  objectFit: "fill",
  position: "relative",
  opacity: 0,
  visibility: "hidden",
  borderRadius: "15px",
  fontSize: "10px",
}));

const LeftBanner = styled("div", { name: "LeftBanner", slot: "Wrapper" })(
  ({ theme }) => ({
    width: "min(200px,200px)",
    height: "max(max-content,max-content)",
    backgroundColor: theme.palette.secondary.dark,
    borderEndStartRadius: "20px",
    borderEndEndRadius: "20px",
    position: "absolute",
    top: "0px",
    left: "8%",
    zIndex: 2,
    padding: "10px 20px 10px 20px",
    boxShadow: "0 1px 2px white",
    textAlign: "left",
    opacity: 0,
    visibility: "hidden",

    "@media (max-width:1000px)": {
      fontSize: "14px",
    },
    "@media (max-width:800px)": {
      fontSize: "12px",
      width: "min(150px,150px)",
    },

    "@media (max-width:680px)": {
      fontSize: "8px",
      left: "10%",
      width: "min(120px,120px)",
    },
  })
);
const RightBanner = styled("div", { name: "RightBanner", slot: "Wrapper" })(
  ({ theme }) => ({
    width: "min(200px,200px)",
    height: "max(max-content,max-content)",
    backgroundColor: theme.palette.secondary.dark,
    borderEndStartRadius: "20px",
    borderEndEndRadius: "20px",
    position: "absolute",
    top: "0px",
    right: "8%",
    zIndex: 2,
    padding: "10px 20px 10px 20px",
    boxShadow: "0 1px 2px white",
    textAlign: "left",
    opacity: 0,
    visibility: "hidden",

    "@media (max-width:1000px)": {
      fontSize: "14px",
    },

    "@media (max-width:980px)": {
      fontSize: "10px",
      width: "min(125px,125px)",
      padding: "10px 10px 10px 10px",
      right: "12.5%",
    },
    "@media (max-width:680px)": {
      fontSize: "8px",
      left: "10%",
      width: "min(120px,120px)",
    },
  })
);

export { LeftBanner, RightBanner, PhotoGalleryImg };
