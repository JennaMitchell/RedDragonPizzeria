import { styled } from "@mui/material";
/// Crust Only Images
import handTossedDough from "../../../../img/pizza-maker/dough/hand-tossed.png";
import thinCrustDough from "../../../../img/pizza-maker/dough/thin-crust.png";
import deepDish from "../../../../img/pizza-maker/dough/deep-dish.png";
/// Crust With Sauce Images
const PizzaDoughContainer = styled("img", {
  name: "PizzaDoughContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(400px,400px)",
  height: "max(400px,400px)",
  display: "grid",
  placeItems: "center",
  position: "relative",
  transition: "all 2s",
  zIndex: 2,
}));

const PizzaDoughAndSauceImageManger = ({ dough, sauce }) => {
  let renderReadyImage = "";
  // first is to handle if the user hasn't picked a sauce yet
  if (sauce.length === 0) {
    switch (dough) {
      case "Thin": {
        renderReadyImage = <PizzaDoughContainer src={handTossedDough} />;
        break;
      }
      default:
        console.log("hello");
    }
  }

  return <></>;
};
export default PizzaDoughAndSauceImageManger;
