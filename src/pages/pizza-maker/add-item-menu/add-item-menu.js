import {
  AddItemMenuContainer,
  InterfaceContainer,
  ClosingIcon,
} from "./add-item-menu-styled-components";

import addItemMenuDatabase from "./add-item-menu-database";
import AddItemMenuOptionContainer from "./add-item-menu-option-container";
import { useState } from "react";
import FiveToppingsWarning from "../popups/five-toppings-warning";
import { useSelector, useDispatch } from "react-redux";
import PepperoniPizzaResizeWarning from "../popups/pepperoni-pizza-resize-warning";
import PepperoniLimitReachedWarning from "../popups/pepperoni-limit-reached-warning";
import useMediaQuery from "@mui/material/useMediaQuery";
import { storeActions } from "../../../store/store";

const AddItemMenu = ({ pizzaMenuActive, pizzaCreationType }) => {
  // Sizes, Crust, Cheese, Veggies, Meats, Other,
  const [addItemMenuData, setAddItemMenuData] = useState(addItemMenuDatabase);
  const dispatch = useDispatch();
  let renderReadyData = "";
  const closeMenuButton = useMediaQuery("(max-width:710px)");
  const fiveToppingsWarningActive = useSelector(
    (state) => state.fiveToppingsWarning
  );
  const pepperoniPizzaResizeWarning = useSelector(
    (state) => state.pepperoniPizzaResizeWarning
  );
  const pepperoniLimitReachedWarning = useSelector(
    (state) => state.pepperoniLimitReachedWarning
  );
  const buildAPizzaDataTypes = [
    "size",
    "crust",
    "sauce",
    "cheese",
    "veggies",
    "meats",
    "other",
  ];
  const pepperoniMakerDataTypes = [
    "size",
    "crust",
    "sauce",
    "cheese",
    "pepperoni",
  ];
  // category button handler
  const categoryButtonHandler = (clickedSection) => {
    // temp deep copy
    let tempDatabaseCopy = JSON.parse(JSON.stringify(addItemMenuData));
    let arrayOfFalseActiveMenu;

    // the if statement below is used to clear the other opened menus
    if (pizzaCreationType === "Custom Pepperoni Layout") {
      arrayOfFalseActiveMenu = pepperoniMakerDataTypes.filter(
        (type) => type !== clickedSection
      );
    } else {
      arrayOfFalseActiveMenu = buildAPizzaDataTypes.filter(
        (type) => type !== clickedSection
      );
    }

    for (let u = 0; u < arrayOfFalseActiveMenu.length; u++) {
      tempDatabaseCopy[arrayOfFalseActiveMenu[u]].active = false;
    }
    // once its down cleaing we activate the one sextion that was clicked
    tempDatabaseCopy[clickedSection].active =
      !tempDatabaseCopy[clickedSection].active;

    // then pass the modified object to the state
    setAddItemMenuData(tempDatabaseCopy);
  };

  const renderReadyBuildAPizzaMenu = buildAPizzaDataTypes.map((type, index) => {
    const data = addItemMenuData[type];
    return (
      <AddItemMenuOptionContainer
        key={index}
        active={data.active}
        data={data.data}
        objectSection={type}
        categoryButtonHandler={categoryButtonHandler}
      />
    );
  });
  const renderReadyPepperoniLayout = pepperoniMakerDataTypes.map(
    (type, index) => {
      const data = addItemMenuData[type];
      return (
        <AddItemMenuOptionContainer
          key={index}
          active={data.active}
          data={data.data}
          objectSection={type}
          categoryButtonHandler={categoryButtonHandler}
        />
      );
    }
  );

  if (pizzaCreationType === "Custom Pepperoni Layout") {
    renderReadyData = renderReadyPepperoniLayout;
  } else {
    renderReadyData = renderReadyBuildAPizzaMenu;
  }
  const closingIconHandler = () => {
    dispatch(storeActions.setPizzaToppingsMenuActive(false));
  };

  return (
    <AddItemMenuContainer
      sx={{
        left: `${pizzaMenuActive && `0px`}`,
        borderRight: `${pizzaMenuActive && `1px solid white`} `,
        "@media(max-width:710px)": {
          left: `${pizzaMenuActive && `0px`}`,
        },
      }}
    >
      {fiveToppingsWarningActive && (
        <FiveToppingsWarning
          fiveToppingsWarningPopup={fiveToppingsWarningActive}
        />
      )}
      {pepperoniPizzaResizeWarning && (
        <PepperoniPizzaResizeWarning
          togglePopup={pepperoniPizzaResizeWarning}
        />
      )}
      {pepperoniLimitReachedWarning && (
        <PepperoniLimitReachedWarning
          togglePopup={pepperoniLimitReachedWarning}
        />
      )}
      {closeMenuButton && <ClosingIcon onClick={closingIconHandler} />}
      <InterfaceContainer>{renderReadyData}</InterfaceContainer>
    </AddItemMenuContainer>
  );
};
export default AddItemMenu;
