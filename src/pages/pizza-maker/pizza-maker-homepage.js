import {
  TopContainer,
  NewPizzaButton,
  PurchaseButton,
  PurchaseButtonDisabled,
  KitchenTableContainer,
  PizzaPeelWithPan,
  PizzaPeelWithoutPan,
  MenuButton,
  OpenMenuIcon,
  CloseMenuIcon,
  MainTitle,
  MainTitleContainer,
  DarkBackground,
} from "./pizza-maker-homepage-styled-components";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import NewPizzaPopup from "./popups/new-pizza-popup";

import pizzaPeel from "../../img/pizza-maker/peel/pizza-peel.png";
import pizzaPeelWithPan from "../../img/pizza-maker/peel/pizza-peel-with-pan.png";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddItemMenu from "./add-item-menu/add-item-menu";
import BuildAPizzaDisplayImage from "./build-a-pizza/build-a-pizza-top-image-container";
import PepperoniMakerDisplayImage from "./pepperoni-maker/pepperoni-maker-pan-manager";
import BuildAPizzaOrderReviewBoard from "./build-a-pizza/order-review-board/build-a-pizza-order-review-board";
import PepperoniMakerOrderReviewBoard from "./pepperoni-maker/order-review-board/pepperoni-maker-order-review-board";
import { storeActions } from "../../store/store";

const PizzaMakerHomepage = () => {
  const [newPizzaPopup, setNewPizzaPopup] = useState(true);
  const [pizzaCreationType, setPizzaCreationType] = useState("");
  const [pizzaMenuActive, setPizzaMenuActive] = useState(false);
  const [panDropedOff, setPanDroppedOff] = useState(false);
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );
  const dispatch = useDispatch();
  const exportRef = useRef(null);
  const newPizzaHandler = () => {
    setNewPizzaPopup(!newPizzaPopup);
  };

  const addToCartHandler = () => {
    dispatch(storeActions.setAddToCartButtonClicked(true));
  };
  const pizzaCreationTypeHandler = (type) => {
    setPizzaCreationType(type);
  };
  const pizzaMenuHandler = () => {
    setPizzaMenuActive(!pizzaMenuActive);
  };

  // Handeling add To Cart Enablers

  let shoppingCartEnabled = false;
  let userMissingData = false;

  let possibleUserSelectedTypes = ["size", "crust", "sauce", "cheese"];
  for (let type of possibleUserSelectedTypes) {
    if (buildAPizzaUserSelectedObject[type].length === 0) {
      userMissingData = true;
      break;
    }
  }
  if (!userMissingData) {
    shoppingCartEnabled = true;
  } else {
    shoppingCartEnabled = false;
  }

  const pepperoniDragEventActive = useSelector(
    (state) => state.pepperoniDragEventActive
  );
  const pizzaPeelSlideIn = keyframes({
    "0%": { right: "-1200px" },
    "100%": { right: "300px", display: "none" },
  });

  const pizzaPeelSlideOut = keyframes({
    "0%": { right: "300px" },
    "100%": { right: "-1200px" },
  });

  useEffect(() => {
    if (!newPizzaPopup) {
      setTimeout(() => {
        setPanDroppedOff(true);
      }, 1000);
    }
  }, [newPizzaPopup]);

  return (
    <TopContainer>
      <MainTitleContainer
        sx={{ visibility: `${!panDropedOff ? "hidden" : "visible"}` }}
      >
        <MainTitle variant="h2">{pizzaCreationType}</MainTitle>
      </MainTitleContainer>
      {/* Add Item Menu */}
      <AddItemMenu
        pizzaMenuActive={pizzaMenuActive}
        pizzaCreationType={pizzaCreationType}
      />
      <MenuButton sx={{ left: `${pizzaMenuActive && `550px`}` }}>
        {pizzaMenuActive ? (
          <CloseMenuIcon onClick={pizzaMenuHandler} />
        ) : (
          <OpenMenuIcon onClick={pizzaMenuHandler} />
        )}
      </MenuButton>
      {/* Pizza Peel Animation */}
      <PizzaPeelWithPan
        src={pizzaPeelWithPan}
        alt="Pizza Peel"
        sx={{
          animation: `${
            !newPizzaPopup && `${pizzaPeelSlideIn} 1000ms ease-out`
          }`,
          visibility: `${panDropedOff ? "hidden" : "visible"}`,
        }}
      />
      <PizzaPeelWithoutPan
        src={pizzaPeel}
        alt="Pizza Peel"
        sx={{
          animation: `${
            panDropedOff && `${pizzaPeelSlideOut} 1000ms ease-out`
          }`,
          visibility: `${!panDropedOff ? "hidden" : "visible"}`,
        }}
      />

      <NewPizzaPopup
        newPizzaPopup={newPizzaPopup}
        onClose={newPizzaPopup}
        onCloseFunction={newPizzaHandler}
        retrievePizzaType={pizzaCreationTypeHandler}
      />
      {/* Display Image Handler */}
      {pizzaCreationType !== "Custom Pepperoni Layout" && (
        <KitchenTableContainer ref={exportRef}>
          {panDropedOff && <BuildAPizzaDisplayImage />}
          {panDropedOff && <BuildAPizzaOrderReviewBoard />}
        </KitchenTableContainer>
      )}
      {pizzaCreationType === "Custom Pepperoni Layout" && (
        <KitchenTableContainer ref={exportRef}>
          {panDropedOff && <PepperoniMakerDisplayImage />}
          {panDropedOff && <PepperoniMakerOrderReviewBoard />}
        </KitchenTableContainer>
      )}
      {/* Used to handle the user moving peperoni around */}
      {pepperoniDragEventActive && <DarkBackground />}
      {/* Close Button Icon */}
      <NewPizzaButton onClick={newPizzaHandler} />
      {shoppingCartEnabled && <PurchaseButton onClick={addToCartHandler} />}
      {!shoppingCartEnabled && (
        <PurchaseButtonDisabled onClick={addToCartHandler} />
      )}
    </TopContainer>
  );
};
export default PizzaMakerHomepage;
