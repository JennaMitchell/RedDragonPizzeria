import {
  AddItemMenuContainer,
  InterfaceContainer,
} from "./add-item-menu-styled-components";

import addItemMenuDatabase from "./add-item-menu-database";
import AddItemMenuOptionContainer from "./add-item-menu-option-container";
import { useState } from "react";
import FiveToppingsWarning from "../popups/five-toppings-warning/five-toppings-warning";
import { useSelector } from "react-redux";
const AddItemMenu = ({ pizzaMenuActive, pizzaCreationType }) => {
  // Sizes, Crust, Cheese, Veggies, Meats, Other,
  const [addItemMenuData, setAddItemMenuData] = useState(addItemMenuDatabase);

  const buildAPizzaDataTypes = [
    "size",
    "crust",
    "sauce",
    "cheese",
    "veggies",
    "meats",
    "other",
  ];
  const pepperoniMakerDataTypes = ["size", "crust", "sauce", "cheese"];
  // category button handler
  const categoryButtonHandler = (clickedSection) => {
    // temp deep copy
    let tempDatabaseCopy = JSON.parse(JSON.stringify(addItemMenuData));
    let arrayOfFalseActiveMenu;

    // the if statement below is used to clear the other opened menus
    if (pizzaCreationType === "Pepperoni Maker") {
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

  let renderReadyData = "";
  if (pizzaCreationType === "Pepperoni Maker") {
    renderReadyData = renderReadyPepperoniLayout;
  } else {
    renderReadyData = renderReadyBuildAPizzaMenu;
  }
  const fiveToppingsWarningActive = useSelector(
    (state) => state.fiveToppingsWarning
  );
  return (
    <AddItemMenuContainer sx={{ left: `${pizzaMenuActive && `0px`}` }}>
      {fiveToppingsWarningActive && (
        <FiveToppingsWarning
          fiveToppingsWarningPopup={fiveToppingsWarningActive}
        />
      )}
      <InterfaceContainer>{renderReadyData}</InterfaceContainer>
    </AddItemMenuContainer>
  );
};
export default AddItemMenu;
