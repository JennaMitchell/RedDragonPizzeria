import { styled } from "@mui/material/styles";
import { Toolbar } from "@mui/material";

const LogoContainer = styled("div", {
  name: "LogoContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(80px,80px)",
  height: "max(80px,80px)",
  marginTop: "5px",
  marginBottom: "5px",
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  marginLeft: "15px",
  borderRadius: "50%",

  backgroundColor: theme.palette.secondary.dark,
  "@media (max-width:895px)": {
    width: "max(60px,60px)",
    height: "max(60px,60px)",
  },
  "@media (max-width:700px)": {
    width: "max(50px,50px)",
    height: "max(50px,50px)",
  },
}));
const LogoImage = styled("img", {
  name: "LogoImage",
  slot: "Wrapper",
})({
  width: "max(70%,70%)",
  height: "max(70%,70%)",
  position: "relative",
});
const LogoTitleContainer = styled("div", {
  name: "LogoTitleContainer",
  slot: "Wrapper",
})({
  display: "grid",
  width: "max(max-content,max-content)",
  gridTemplateColumns: "max-content max-content",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  gap: "5px",
});

const StyledToolBar = styled(Toolbar, {
  name: "StyledToolBar",
  slot: "Wrapper",
})({
  display: "grid",

  gridTemplateColumns: "max-content max-content",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  "@media (max-width:940px)": {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  "@media (max-width:880px)": {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  "@media (max-width:760px)": {
    paddingLeft: "5px",
    paddingRight: "5px",
  },
});

const RoofSvgContainer = styled("img", {
  name: "RoofSvgContainer",
  slot: "Wrapper",
})({
  width: "max(100%,100%)",
  height: "max(50px,50px)",
  position: "absolute",
  top: "90px",
  left: "0px",
  zIndex: "1",
  "@media(max-width:895px)": {
    top: "70px",
  },
  "@media(max-width:700px)": {
    top: "60px",
    height: "max(40px,40px)",
  },
  "@media(max-width:620px)": {
    height: "max(30px,30px)",
  },
});

export {
  LogoContainer,
  LogoImage,
  LogoTitleContainer,
  StyledToolBar,
  RoofSvgContainer,
};
