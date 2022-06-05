import {
  AddItemMenuContainer,
  InterfaceContainer,
} from "./add-item-menu-styled-components";

import addItemMenuDatabase from "./add-item-menu-database";
import AddItemMenuOptionContainer from "./add-item-menu-option-container";

const AddItemMenu = ({ pizzaMenuActive, pizzaCreationType }) => {
  // Sizes, Crust, Cheese, Veggies, Meats, Other,

  const buildAPizzaDataTypes = [
    "size",
    "crust",
    "cheese",
    "veggies",
    "meats",
    "other",
  ];
  const pepperoniMakerDataTypes = ["size", "crust", "cheese"];
  const renderReadyBuildAPizzaMenu = buildAPizzaDataTypes.map((type, index) => {
    const data = addItemMenuDatabase[type];
    return (
      <AddItemMenuOptionContainer
        key={index}
        active={data.active}
        data={data.data}
        objectSection={type}
      />
    );
  });
  const renderReadyPepperoniLayout = pepperoniMakerDataTypes.map(
    (type, index) => {
      const data = addItemMenuDatabase[type];
      return (
        <AddItemMenuOptionContainer
          key={index}
          active={data.active}
          data={data.data}
          objectSection={type}
        />
      );
    }
  );

  let renderReadyData = "";
  if (pizzaCreationType === "Pepperoni Marker") {
    renderReadyData = renderReadyPepperoniLayout;
  } else {
    renderReadyData = renderReadyBuildAPizzaMenu;
  }
  return (
    <AddItemMenuContainer sx={{ left: `${pizzaMenuActive && `0px`}` }}>
      <InterfaceContainer>{renderReadyData}</InterfaceContainer>
    </AddItemMenuContainer>
  );
};
export default AddItemMenu;
