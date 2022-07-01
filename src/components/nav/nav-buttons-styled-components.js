import { styled } from "@mui/material/styles";

const ButtonContainer = styled("div", {
  name: "ButtonContainer",
  slot: "Wrapper",
})({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "grid",
  gridTemplateColumns: "repeat(6,max-content)",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  zIndex: "inherit",

  position: "relative",
  "@media (max-width:1200px)": {
    gridTemplateColumns: "repeat(4,max-content)",
    gap: "0px",
  },
});

const ShoppingCartContainer = styled("div", {
  name: "ShoppingCartContainer",
  slot: "Wrapper",
})({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "flex",
  placeItems: "center",
  zIndex: "inherit",

  position: "relative",
  padding: "10px",
  borderRadius: "50%",
  transition: "all 0.5s",

  "@media (max-width:760px)": {
    padding: "5px",
  },
  "@media (max-width:660px)": {
    padding: "2.5px 5px 2.5px 5px",
  },
});

const ShoppingCartItemsTracker = styled("div", {
  name: "ShoppingCartItemsTracker",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  padding: "4px 6px 4px 6px",
  position: "absolute",
  top: "0px",
  right: "0px",
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.light,
  borderRadius: "50%",
  textAlign: "center",
  lineHeight: "12px",
  fontSize: "12px",
  fontWeight: "700",
  transition: "all 0.5s",

  "@media(max-width:800px)": {
    padding: "2px 4px 2px 4px",
    fontSize: "10px",
    top: "-3px",
    right: "-2.5px",
  },
  "@media (max-width:770px)": {
    top: "1px",
    right: "-2.5px",
  },
}));
const PhoneContainer = styled("div", {
  name: "PhoneContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "grid",
  gridTemplateColumns: "repeat(2,max-content)",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  gap: "10px",
  "@media(max-width:880px)": {
    gap: "5px",
  },
}));

const MenuIconContainer = styled("div", {
  name: "MenuIconContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "grid",
  position: "relative",
  padding: "10px",
  borderRadius: "50%",
  transition: "all 0.5s",

  "@media (max-width:760px)": {
    padding: "2.5px",
  },
}));

export {
  PhoneContainer,
  ShoppingCartItemsTracker,
  ShoppingCartContainer,
  ButtonContainer,
  MenuIconContainer,
};
