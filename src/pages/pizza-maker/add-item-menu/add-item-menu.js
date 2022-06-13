import {
  AddItemMenuContainer,
  InterfaceContainer,
} from "./add-item-menu-styled-components";

import addItemMenuDatabase from "./add-item-menu-database";
import AddItemMenuOptionContainer from "./add-item-menu-option-container";
import { useState } from "react";
import FiveToppingsWarning from "../popups/five-toppings-warning";
import { useSelector } from "react-redux";
import PepperoniPizzaResizeWarning from "../popups/pepperoni-pizza-resize-warning";
import PepperoniLimitReachedWarning from "../popups/pepperoni-limit-reached-warning";

const AddItemMenu = ({ pizzaMenuActive, pizzaCreationType }) => {
  // Sizes, Crust, Cheese, Veggies, Meats, Other,
  const [addItemMenuData, setAddItemMenuData] = useState(addItemMenuDatabase);
  let renderReadyData = "";
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

  return (
    <AddItemMenuContainer
      sx={{
        left: `${pizzaMenuActive && `0px`}`,
        boxShadow: `${pizzaMenuActive && `0 0 10px white`} `,
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

      <InterfaceContainer>{renderReadyData}</InterfaceContainer>
    </AddItemMenuContainer>
  );
};
export default AddItemMenu;
