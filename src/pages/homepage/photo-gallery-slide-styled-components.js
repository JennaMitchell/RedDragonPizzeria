import { styled } from "@mui/material/styles";

const PhotoGalleryImg = styled("img", {
  name: "PhotoGalleryImg",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(1200px,1200px)",
  height: "max(100%,100%)",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.light,
  objectFit: "cover",
}));

const LeftBanner = styled("div", { name: "LeftBanner", slot: "Wrapper" })(
  ({ theme }) => ({
    width: "max(400px,400px)",
    height: "max(400px,400px)",
    backgroundColor: theme.palette.secondary.main,
    borderEndStartRadius: "20px",
    position: "absolute",
    top: "0px",
    left: "200px",
  })
);
const RightBanner = styled("div", { name: "LeftBanner", slot: "Wrapper" })(
  ({ theme }) => ({
    width: "max(400px,400px)",
    height: "max(400px,400px)",
    backgroundColor: theme.palette.secondary.main,
    borderEndStartRadius: "20px",
    position: "absolute",
    top: "0px",
    right: "200px",
  })
);

export { LeftBanner, RightBanner, PhotoGalleryImg };
