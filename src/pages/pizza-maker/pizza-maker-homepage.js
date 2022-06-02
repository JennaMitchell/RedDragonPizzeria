import { TopContainer } from "./pizza-maker-homepage-styled-components";
import { useState } from "react";

import NewPizzaPopup from "./popups/new-pizza-popup";

const PizzaMakerHomepage = () => {
  const [newPizzaPopup, setNewPizzaPopup] = useState(true);
  const [pizzaCreationType, setPizzaCreationType] = useState("");
  const newPizzaHandler = () => {
    setNewPizzaPopup(!newPizzaPopup);
  };
  const pizzaCreationTypeHandler = (type) => {
    setPizzaCreationType(type);
  };

  return (
    <TopContainer>
      <NewPizzaPopup
        newPizzaPopup={newPizzaPopup}
        onClose={newPizzaPopup}
        onCloseFunction={newPizzaHandler}
        retrievePizzaType={pizzaCreationTypeHandler}
      />
    </TopContainer>
  );
};
export default PizzaMakerHomepage;
