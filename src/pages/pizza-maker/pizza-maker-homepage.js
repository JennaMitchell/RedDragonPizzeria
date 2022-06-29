import {
  TopContainer,
  NewPizzaButton,
  PurchaseButton,
  PurchaseButtonDisabled,
  KitchenTableContainer,
  MenuButton,
  OpenMenuIcon,
  CloseMenuIcon,
  MainTitle,
  MainTitleContainer,
  DarkBackground,
} from "./pizza-maker-homepage-styled-components";
import { useState } from "react";

import NewPizzaPopup from "./popups/new-pizza-popup";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddItemMenu from "./add-item-menu/add-item-menu";
import BuildAPizzaDisplayImage from "./build-a-pizza/build-a-pizza-top-image-container";
import PepperoniMakerDisplayImage from "./pepperoni-maker/pepperoni-maker-pan-manager";
import BuildAPizzaOrderReviewBoard from "./build-a-pizza/order-review-board/build-a-pizza-order-review-board";
import PepperoniMakerOrderReviewBoard from "./pepperoni-maker/order-review-board/pepperoni-maker-order-review-board";
import { storeActions } from "../../store/store";
import useMediaQuery from "@mui/material/useMediaQuery";

const PizzaMakerHomepage = () => {
  const [newPizzaPopup, setNewPizzaPopup] = useState(true);
  const [pizzaCreationType, setPizzaCreationType] = useState("");

  // const [panDropedOff, setPanDroppedOff] = useState(false);
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );
  const pizzaToppingsMenuActive = useSelector(
    (state) => state.pizzaToppingsMenuActive
  );
  const yourOrderContainerMoved = useMediaQuery("(max-width:1200px)");
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
    dispatch(storeActions.setPizzaToppingsMenuActive(!pizzaToppingsMenuActive));
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

  // Commented code below is just for reference of a pizza peel slide effect idea
  // const pizzaPeelSlideIn = keyframes({
  //   "0%": { right: "-1200px" },
  //   "100%": { right: "300px", display: "none" },
  // });
  let pepperoniLayoutSeperatedReviewOrderBoardActive = false;
  let buildAPizzaSeperatedReviewOrderBoardActive = false;
  // if (panDropedOff) {
  if (yourOrderContainerMoved) {
    if (pizzaCreationType === "Custom Pepperoni Layout") {
      buildAPizzaSeperatedReviewOrderBoardActive = true;
    } else {
      pepperoniLayoutSeperatedReviewOrderBoardActive = true;
    }
  }
  // }

  // const pizzaPeelSlideOut = keyframes({
  //   "0%": { right: "300px" },
  //   "100%": { right: "-1200px" },
  // });

  // useEffect(() => {
  //   if (!newPizzaPopup) {
  //     if (!yourOrderContainerMoved) {
  //       setTimeout(() => {
  //         setPanDroppedOff(true);
  //       }, 1000);
  //     }
  //   } else {
  //     setPanDroppedOff(true);
  //   }
  // }, [newPizzaPopup, yourOrderContainerMoved]);

  return (
    <TopContainer>
      <MainTitleContainer
        sx={{ visibility: `${newPizzaPopup ? "hidden" : "visible"}` }}
      >
        <MainTitle variant="h2">{pizzaCreationType}</MainTitle>
      </MainTitleContainer>
      {/* Add Item Menu */}
      <AddItemMenu
        pizzaMenuActive={pizzaToppingsMenuActive}
        pizzaCreationType={pizzaCreationType}
      />
      <MenuButton sx={{ left: `${pizzaToppingsMenuActive && `550px`}` }}>
        {pizzaToppingsMenuActive ? (
          <CloseMenuIcon onClick={pizzaMenuHandler} />
        ) : (
          <OpenMenuIcon onClick={pizzaMenuHandler} />
        )}
      </MenuButton>
      {/* Pizza Peel Animation */}

      <NewPizzaPopup
        newPizzaPopup={newPizzaPopup}
        onClose={newPizzaPopup}
        onCloseFunction={newPizzaHandler}
        retrievePizzaType={pizzaCreationTypeHandler}
      />
      {/* Display Image Handler */}
      {pizzaCreationType !== "Custom Pepperoni Layout" && (
        <KitchenTableContainer ref={exportRef}>
          <BuildAPizzaDisplayImage />
          {!pepperoniLayoutSeperatedReviewOrderBoardActive && (
            <BuildAPizzaOrderReviewBoard />
          )}
        </KitchenTableContainer>
      )}
      {pizzaCreationType === "Custom Pepperoni Layout" && (
        <KitchenTableContainer ref={exportRef}>
          <PepperoniMakerDisplayImage />
          {!buildAPizzaSeperatedReviewOrderBoardActive && (
            <PepperoniMakerOrderReviewBoard />
          )}
        </KitchenTableContainer>
      )}
      {pepperoniLayoutSeperatedReviewOrderBoardActive && (
        <PepperoniMakerOrderReviewBoard />
      )}
      {buildAPizzaSeperatedReviewOrderBoardActive && (
        <BuildAPizzaOrderReviewBoard />
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
