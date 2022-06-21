import { styled } from "@mui/material";
/// Crust Only Images
import handTossedDough from "../../../img/pizza-maker/dough/hand-tossed.png";
import thinCrustDough from "../../../img/pizza-maker/dough/thin-crust.png";
import deepDish from "../../../img/pizza-maker/dough/deep-dish.png";

const PizzaDoughContainer = styled("img", {
  name: "PizzaDoughContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(89%,89%)",
  height: "max(89%,89%)",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  transition: "all 2s",
  zIndex: 3,
}));

const PizzaDoughImageManger = ({ dough }) => {
  let renderReadyDoughImage = "";

  switch (dough) {
    case "Thin": {
      renderReadyDoughImage = <PizzaDoughContainer src={thinCrustDough} />;
      break;
    }
    case "Hand Tossed": {
      renderReadyDoughImage = <PizzaDoughContainer src={handTossedDough} />;
      break;
    }
    case "Deep Dish": {
      renderReadyDoughImage = <PizzaDoughContainer src={deepDish} />;
      break;
    }
    case "New York Style": {
      renderReadyDoughImage = <PizzaDoughContainer src={thinCrustDough} />;
      break;
    }
    case "Brooklyn Style": {
      renderReadyDoughImage = <PizzaDoughContainer src={thinCrustDough} />;
      break;
    }
    default:
      renderReadyDoughImage = "";
      break;
  }

  return <>{renderReadyDoughImage}</>;
};
export default PizzaDoughImageManger;
