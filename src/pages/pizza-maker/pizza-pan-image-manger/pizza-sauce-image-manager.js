import { styled } from "@mui/material";
import deepDishMarinaraSauce from "../../../img/pizza-maker/sauces/deep-dish/deep-dish-mar.png";
import deepDishRobustTomatoSauce from "../../../img/pizza-maker/sauces/deep-dish/deep-dish-robust-tomato.png";
import deepDishGarlicParmSauce from "../../../img/pizza-maker/sauces/deep-dish/deep-dish-garlic-sauce.png";
import deepDishBbqSauce from "../../../img/pizza-maker/sauces/deep-dish/deep-dish-bbq.png";
import deepDishAlfredoSauce from "../../../img/pizza-maker/sauces/deep-dish/deep-dish-alfredo.png";

import thinCrustMarinaraSauce from "../../../img/pizza-maker/sauces/thin-crust/thin-crust-mar.png";
import thinCrustRobustTomatoSauce from "../../../img/pizza-maker/sauces/thin-crust/thin-crust-robust-sauce.png";
import thinCrustGarlicParmSauce from "../../../img/pizza-maker/sauces/thin-crust/thin-crust-garlic.png";
import thinCrustBbqSauce from "../../../img/pizza-maker/sauces/thin-crust/thin-crust-bbq.png";
import thinCrustAlfredoSauce from "../../../img/pizza-maker/sauces/thin-crust/thin-crust-alfredo.png";

import handTossedMarinaraSauce from "../../../img/pizza-maker/sauces/hand-tossed/hand-tossed-mar.png";
import handTossedRobustTomatoSauce from "../../../img/pizza-maker/sauces/hand-tossed/hand-tossed-robust-tomato.png";
import handTossedGarlicParmSauce from "../../../img/pizza-maker/sauces/hand-tossed/hand-tossed-garlic-sauce.png";
import handTossedBbqSauce from "../../../img/pizza-maker/sauces/hand-tossed/hand-tossed-bbq.png";
import handTossedAlfredoSauce from "../../../img/pizza-maker/sauces/hand-tossed/hand-tossed-alfredo.png";

const PizzaSauceContainer = styled("img", {
  name: "PizzaSauceContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(83%,83%)",
  height: "max(83%,83%)",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  transition: "all 2s",
  zIndex: 4,
}));

const PizzaSauceImageManger = ({ sauce, crust }) => {
  let renderReadySauceImage = "";

  switch (sauce) {
    case "Marinara":
      if (crust === "Deep Dish") {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={deepDishMarinaraSauce}
            alt="Robust Tomato Sauce"
          />
        );
      } else if (crust === "Hand Tossed") {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={handTossedMarinaraSauce}
            alt="Robust Tomato Sauce"
          />
        );
      } else {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={thinCrustMarinaraSauce}
            alt="Robust Tomato Sauce"
          />
        );
      }

      break;
    case "Robust Tomato":
      if (crust === "Deep Dish") {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={deepDishRobustTomatoSauce}
            alt="Robust Tomato Sauce"
          />
        );
      } else if (crust === "Hand Tossed") {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={handTossedRobustTomatoSauce}
            alt="Robust Tomato Sauce"
          />
        );
      } else {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={thinCrustRobustTomatoSauce}
            alt="Robust Tomato Sauce"
          />
        );
      }
      break;
    case "BBQ":
      if (crust === "Deep Dish") {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={deepDishBbqSauce}
            alt="Robust Tomato Sauce"
          />
        );
      } else if (crust === "Hand Tossed") {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={handTossedBbqSauce}
            alt="Robust Tomato Sauce"
          />
        );
      } else {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={thinCrustBbqSauce}
            alt="Robust Tomato Sauce"
          />
        );
      }
      break;
    case "Alfredo":
      if (crust === "Deep Dish") {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={deepDishAlfredoSauce}
            alt="Robust Tomato Sauce"
          />
        );
      } else if (crust === "Hand Tossed") {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={handTossedAlfredoSauce}
            alt="Robust Tomato Sauce"
          />
        );
      } else {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={thinCrustAlfredoSauce}
            alt="Robust Tomato Sauce"
          />
        );
      }
      break;
    case "Garlic Parmesan White":
      if (crust === "Deep Dish") {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={deepDishGarlicParmSauce}
            alt="Robust Tomato Sauce"
          />
        );
      } else if (crust === "Hand Tossed") {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={handTossedGarlicParmSauce}
            alt="Robust Tomato Sauce"
          />
        );
      } else {
        renderReadySauceImage = (
          <PizzaSauceContainer
            src={thinCrustGarlicParmSauce}
            alt="Robust Tomato Sauce"
          />
        );
      }
      break;

    default:
      renderReadySauceImage = "";
      break;
  }

  return <>{renderReadySauceImage}</>;
};
export default PizzaSauceImageManger;
