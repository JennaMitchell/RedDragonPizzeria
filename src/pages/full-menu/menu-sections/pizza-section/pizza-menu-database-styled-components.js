import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
const PizzaSizesSizes = styled(Typography, {
  name: "PizzaSizesContainer ",
  slot: "Wrapper",
})(({ theme }) => ({
  fontFamily: "inherit",
  color: theme.palette.secondary.light,
  textAlign: "left",
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  "@media (max-width:900px)": {
    fontSize: "16px",
  },
  "@media (max-width:745px)": {
    fontSize: "12px",
  },
  "@media (max-width:540px)": {
    fontSize: "10px",
  },
  "@media (max-width:400px)": {
    fontSize: "8px",
  },
}));
// 14px
const PizzaSizesContainer = styled("div", {
  name: "PizzaSizesContainer ",
  slot: "Wrapper",
})(() => ({
  display: "grid",
  justifyContent: "space-between",
  gridTemplateColumns: "repeat(2,max-content)",
  alignItems: "center",
  width: "max(70%,70%)",
  height: "max(max-content,max-content)",
}));

const PizzaSizesPrice = styled(Typography, {
  name: "PizzaSizesPrice",
  slot: "Wrapper",
})(({ theme }) => ({
  fontFamily: "inherit",
  color: theme.palette.secondary.light,

  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  "@media (max-width:900px)": {
    fontSize: "16px",
  },
  "@media (max-width:745px)": {
    fontSize: "12px",
  },
  "@media (max-width:540px)": {
    fontSize: "10px",
  },
}));

const PizzaItemContainer = styled("div", {
  name: "PizzaItemContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  display: "grid",
  justifyContent: "flex-start",
  alignItems: "center",
  gridTemplateRows: "repeat(3,max-content)",

  width: "max(90%,90%)",

  height: "max(max-content,max-content)",
  marginTop: "15px",
  textAlign: "center",
  gap: "2px",
}));

export {
  PizzaSizesSizes,
  PizzaSizesPrice,
  PizzaSizesContainer,
  PizzaItemContainer,
};
