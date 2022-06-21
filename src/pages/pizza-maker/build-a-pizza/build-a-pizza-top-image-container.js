import { styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import PizzaSizeImageManager from "../pizza-pan-image-manger/pizza-size-image-manager";
import PizzaDoughImageManger from "../pizza-pan-image-manger/pizza-dough-image-manager";
import PizzaSauceImageManger from "../pizza-pan-image-manger/pizza-sauce-image-manager";
import PizzaCheeseImageManager from "../pizza-pan-image-manger/pizza-cheese-image-manager";
import PizzaToppingsImageManager from "../pizza-pan-image-manger/pizza-toppings-image-manager";
import html2canvas from "html2canvas";
import { useRef } from "react";

import { storeActions } from "../../../store/store";
import customPizzaPriceCalculator from "../../../components/custom-hooks/custom-pizza-price-calculator";
const TopImageContainer = styled("div", {
  name: "TopImageContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  display: "grid",
  placeItems: "center",
  position: "relative",

  zIndex: 2,
}));

const BuildAPizzaDisplayImage = () => {
  const exportRef = useRef(null);
  const dispatch = useDispatch();
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );
  const addToCartButtonClicked = useSelector(
    (state) => state.addToCartButtonClicked
  );
  const cartObject = useSelector((state) => state.cartObject);
  if (addToCartButtonClicked) {
    html2canvas(exportRef.current).then(function (canvas) {
      const image = canvas;

      const deepCopyOfCartObject = JSON.parse(JSON.stringify(cartObject));

      const [userSelectedItemWithPrice, totalPrice] =
        customPizzaPriceCalculator(buildAPizzaUserSelectedObject);

      deepCopyOfCartObject.push({
        title: `Build a Pizza`,
        userSelectedData: userSelectedItemWithPrice,
        image: JSON.stringify(image),
        totalPrice: totalPrice,
      });

      dispatch(storeActions.setCartObject(deepCopyOfCartObject));
      dispatch(storeActions.setAddToCartButtonClicked(false));
    });
  }

  return (
    <TopImageContainer ref={exportRef}>
      <PizzaSizeImageManager size={buildAPizzaUserSelectedObject.size[0]} />
      <PizzaDoughImageManger dough={buildAPizzaUserSelectedObject.crust[0]} />
      <PizzaSauceImageManger
        sauce={buildAPizzaUserSelectedObject.sauce[0]}
        crust={buildAPizzaUserSelectedObject.crust[0]}
      />
      <PizzaCheeseImageManager
        cheese={buildAPizzaUserSelectedObject.cheese[0]}
      />
      <PizzaToppingsImageManager
        veggies={buildAPizzaUserSelectedObject.veggies}
        meats={buildAPizzaUserSelectedObject.meats}
        other={buildAPizzaUserSelectedObject.other}
        cheese={buildAPizzaUserSelectedObject.cheese[0]}
      />
    </TopImageContainer>
  );
};
export default BuildAPizzaDisplayImage;
