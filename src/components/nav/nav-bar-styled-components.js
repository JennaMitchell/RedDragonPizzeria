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
  marginLeft: 15,
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
const LogoTitleContainer = styled("div", {
  name: "LogoTitleContainer",
  slot: "Wrapper",
})({
  display: "grid",
  width: "max(max-content,max-content)",
  gridTemplateColumns: "1fr 3fr",
  alignItems: "center",
  justifyContent: "space-between",
});

const StyledToolBar = styled(Toolbar, {
  name: "StyledToolBar",
  slot: "Wrapper",
})({
  display: "grid",

  gridTemplateColumns: "max-content max-content",
  alignItems: "center",
  justifyContent: "space-between",
});

export { LogoContainer, LogoImage, LogoTitleContainer, StyledToolBar };
