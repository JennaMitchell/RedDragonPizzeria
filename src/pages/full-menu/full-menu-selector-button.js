import { styled } from "@mui/material/styles";
import chalkCircle from "../../img/full-menu/chalk-circle.png";

const SelectorButton = styled("button", {
  name: "MenuSelectorButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "min(100%,100%)",
  height: "max(100%,100%)",
  backgroundColor: "transparent",
  color: theme.palette.secondary.light,
  border: "none",
  borderRadius: "25px",
  display: "grid",
  placeItems: "center",
  fontSize: "32px",
  fontFamily: "Fredericka the Great ,cursive",
  "@media (max-width:1000px)": {
    fontSize: "28px",
  },
  "@media (max-width:880px)": {
    fontSize: "24px",
  },
  "@media (max-width:780px)": {
    fontSize: "20px",
  },
  "@media (max-width:700px)": {
    fontSize: "16px",
  },
  "@media (max-width:520px)": {
    fontSize: "12px",
  },
  "@media (max-width:415px)": {
    fontSize: "10px",
  },
  "@media (max-width:375px)": {
    fontSize: "8px",
  },
}));

const ActiveSelectorButton = styled("button", {
  name: "MenuSelectorButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  backgroundImage: `url(${chalkCircle})`,
  border: "none",
  backgroundColor: "transparent",
  color: theme.palette.secondary.light,
  display: "grid",
  placeItems: "center",
  fontSize: "32px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  fontFamily: "Fredericka the Great ,cursive",
  padding: "10px",
  "@media (max-width:1000px)": {
    fontSize: "28px",
  },
  "@media (max-width:880px)": {
    fontSize: "24px",
  },
  "@media (max-width:780px)": {
    fontSize: "20px",
  },
  "@media (max-width:700px)": {
    fontSize: "16px",
  },
  "@media (max-width:520px)": {
    fontSize: "12px",
  },
  "@media (max-width:415px)": {
    fontSize: "10px",
  },
  "@media (max-width:375px)": {
    fontSize: "8px",
  },
}));

const FullMenuSelectorButton = ({ id, activeId, title, onClickHandler }) => {
  const buttonHandler = () => {
    onClickHandler(title, id);
  };
  if (id === activeId) {
    return <ActiveSelectorButton>{title}</ActiveSelectorButton>;
  } else {
    return <SelectorButton onClick={buttonHandler}>{title}</SelectorButton>;
  }
};
export default FullMenuSelectorButton;
