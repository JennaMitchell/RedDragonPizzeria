import {
  BlackboardContainer,
  MenuContainer,
  ContentMenu,
} from "./order-online-menu-blackboard-styled-components";
import { pizzaMenuDatabase } from "../full-menu/menu-sections/pizza-section/pizza-menu-database";
import OrderItemsSpecilityPizza from "./order-items/order-items-specility-pizza";
import { Grid } from "@mui/material";

const OrderOnlineMenuBlackboard = ({ selectedMenuItem }) => {
  const specilityPizzaData = pizzaMenuDatabase.pizza;

  const specilityPizzaRenderReadyData = specilityPizzaData.map(
    (type, index) => {
      return (
        <Grid
          item
          xs={1}
          key={index}
          sx={{
            width: "max(100%,100%)",
            height: "max(50%,50%)",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <OrderItemsSpecilityPizza index={index} data={type} />
        </Grid>
      );
    }
  );
  let renderReadyMenuData = [];
  if (selectedMenuItem === "Specility Pizza") {
    renderReadyMenuData = (
      <ContentMenu container columns={{ xs: 4 }}>
        {specilityPizzaRenderReadyData}
      </ContentMenu>
    );
  }
  return (
    <BlackboardContainer>
      <MenuContainer>{renderReadyMenuData}</MenuContainer>
    </BlackboardContainer>
  );
};
export default OrderOnlineMenuBlackboard;
