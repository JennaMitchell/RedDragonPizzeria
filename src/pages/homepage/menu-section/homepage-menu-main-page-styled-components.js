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
  "@media(max-width:800px)": {
    width: "max(90%,90%)",
  },
  "@media(max-width:600px)": {
    width: "max(95%,95%)",
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

  backgroundColor: theme.palette.secondary.dark,
  "@media(max-width:1000px)": {
    width: "max(80px,80px)",
    height: "max(80px,80px)",
  },
}));
const LogoImage = styled("img", {
  name: "LogoImage",
  slot: "Wrapper",
})({
  width: "max(70%,70%)",
  height: "max(70%,70%)",
});

const MenuGrid = styled("div", {
  name: "MenuGrid",
  slot: "Wrapper",
})(() => ({
  width: "min(1000px,90%)",
  height: "max(max-content,max-content)",
  display: "grid",
  alignItems: "flex-start",
  justifyContent: "center",
  marginTop: "10px",
  gap: "40px",

  gridTemplateColumns: "repeat(4,1fr)",

  "@media(max-width: 1000px)": {
    gridTemplateColumns: "repeat(3,1fr)",
  },

  "@media(max-width:800px)": {
    gridTemplateColumns: "repeat(2,1fr)",
  },

  "@media(max-width: 750px)": {
    gridTemplateColumns: "repeat(1,1fr)",

    gap: "10px",
  },
}));

export { TopContainer, MenuContainer, LogoContainer, LogoImage, MenuGrid };
