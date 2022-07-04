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

import NewPizzaPopup from "./popups/new-pizza-popup";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddItemMenu from "./add-item-menu/add-item-menu";
import BuildAPizzaDisplayImage from "./build-a-pizza/build-a-pizza-top-image-container";
import PepperoniMakerDisplayImage from "./pepperoni-maker/pepperoni-maker-pan-manager";
import BuildAPizzaOrderReviewBoard from "./build-a-pizza/order-review-board/build-a-pizza-order-review-board";
import PepperoniMakerOrderReviewBoard from "./pepperoni-maker/order-review-board/pepperoni-maker-order-review-board";
import { storeActions } from "../../store/store";
import useMediaQuery from "@mui/material/useMediaQuery";

const PizzaMakerHomepage = () => {
  const newPizzaPopup = useSelector((state) => state.newPizzaPopup);
  const pizzaCreationType = useSelector((state) => state.pizzaCreationType);

  // const [panDropedOff, setPanDroppedOff] = useState(false);
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );
  const pizzaToppingsMenuActive = useSelector(
    (state) => state.pizzaToppingsMenuActive
  );
  const pepperoniDragEventActive = useSelector(
    (state) => state.pepperoniDragEventActive
  );
  const popupActive = useSelector((state) => state.popupActive);
  const yourOrderContainerMoved = useMediaQuery("(max-width:1200px)");
  const dispatch = useDispatch();
  const exportRef = useRef(null);
  const newPizzaHandler = () => {
    dispatch(storeActions.setNewPizzaPopup(!newPizzaPopup));
  };
  const activeNavButton = useSelector((state) => state.activeNavButton);

  /// check to see if user closed  on a different tab  but re-entered on this page. causing the active button to be misaligned
  if (activeNavButton !== "Pizza Maker") {
    dispatch(storeActions.setActiveNavButton("Pizza Maker"));
  }

  const addToCartHandler = () => {
    dispatch(storeActions.setAddToCartButtonClicked(true));
  };

  const pizzaMenuHandler = () => {
    dispatch(storeActions.setPizzaToppingsMenuActive(!pizzaToppingsMenuActive));
  };
  useEffect(() => {
    if (newPizzaPopup) {
      dispatch(storeActions.setPopupActive(true));
    }
  });

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
    <TopContainer
      sx={{
        width: `${popupActive && "100vw"}`,
        overflow: `${pepperoniDragEventActive && "hidden"}`,
      }}
    >
      <MainTitleContainer
        sx={{ visibility: `${newPizzaPopup ? "hidden" : "visible"}` }}
      >
        {pizzaCreationType === "Custom Pepperoni Layout" && (
          <MainTitle variant="h2">{pizzaCreationType}</MainTitle>
        )}
        {pizzaCreationType !== "Custom Pepperoni Layout" && (
          <MainTitle
            variant="h2"
            sx={{
              "@media(max-width:490px) ": {
                padding: "15px 30px 15px 30px",
                fontSize: "28px",
              },
              "@media(max-width:420px) ": {
                fontSize: "28px",
              },
            }}
          >
            {pizzaCreationType}
          </MainTitle>
        )}
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

      <NewPizzaPopup newPizzaPopup={newPizzaPopup} onClose={newPizzaPopup} />
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
