import { Typography } from "@mui/material";
import {
  PizzaSizesContainer,
  PizzaSizesSizes,
  PizzaSizesPrice,
  PizzaItemContainer,
} from "./pizza-menu-database-styled-components";

const pizzaMenuDatabase = {
  createYourOwnPizza: {
    pizzaSizes: [
      { size: "sm", price: "$6.99" },
      { size: "md", price: "$7.99" },
      { size: "lg", price: "$8.99" },
      { size: "xl", price: "$10.99" },
      { size: "xxl", price: "$12.99" },
    ],
    crusts: [
      { crust: "Thin", cals: "Cal. 100 - 150" },
      { crust: "Hand Tossed", cals: "Cal. 130 - 180" },
      { crust: "Brooklyn Style", cals: "Cal. 130 - 180" },
      { crust: "New York Style", cals: "Cal. 120 - 170" },
      { crust: "Deep Dish", cals: "Cal. 190 - 220" },
    ],
    sauces: [
      "Robust Tomato",
      "Marinara",
      "BBQ",
      "Alfredo",
      "Garlic Parmesan White",
    ],
    vegetables: [
      "Fresh Green Pepper",
      "Roasted Red Pepper",
      "Jalapenos",
      "Black Olives",
      "Fresh Mushrooms",
      "Banana Pepper",
      "Tomato Slices",
      "Fresh Onion",
      "Fresh Baby Spinach",
    ],
    meats: ["Pepperoni", "Bacon", "Ham", "Italian Sausage", "Chicken"],
    other: [
      "Pineapple",
      "Hot Sauces",
      "Extra Cheese",
      "Shredded Provolone",
      "Cheddar Cheese",
      "Feta Cheese",
      "Parmesan-Asiago Cheese",
      "Mozzarella Cheese",
    ],
  },
  pizza: [
    {
      title: "Neapolitan Pizza",
      description:
        "Thin crust pizza, topped with mozzarella cheese, fresh tomatoes, and basil",
      price: "sm. $14.99, md. $15.99, lg. $16.99, xl. $18.99, xxl. $20.99 ",
    },
    {
      title: "Chicago Pizza",
      description:
        "Deep dish pizza, served with mozarallea, spicy peperonni and covered with marinara sauce",
      price: "sm. $12.99, md. $13.99, lg. $14.99, xl. $16.99, xxl. $18.99 ",
    },

    {
      title: "New York Style Pizza",
      description:
        "Large hand-tossed thin crust pizza, served with mozzarella and spicy peperonni",
      price: "sm. $17.99, md. $18.99, lg. $19.99, xl. $21.99, xxl. $23.99 ",
    },
    //price: "$17.99 +",
    {
      title: "Sicilian Pizza",
      description:
        "Deep dish pizza, served with onions, tomatoes and toma cheese",
      price: "sm. $12.99, md. $13.99, lg. $14.99, xl. $16.99, xxl. $18.99 ",
    },
    {
      title: "Greek Pizza",
      description:
        "Thin crust pizza, served with feta, roasted red peppers, artichokes, olives and basil",
      price: "sm. $13.99, md. $14.99, lg. $15.99, xl. $17.99, xxl. $19.99 ",
    },
    {
      title: "California Pizza",
      description:
        "Thin crust pizza, served with chicken, peanut sauce, artichoke hearts and goat cheese ",
      price: "sm. $14.99, md. $15.99, lg. $16.99, xl. $18.99, xxl. $20.99 ",
    },
    {
      title: "Detroit Pizza",
      description:
        "Rectangular deep dish pizza, served with fresh marinara sauce, mozzarella cheese, and spicy peperonni",
      price: "sm. $12.99, md. $13.99, lg. $14.99, xl. $16.99, xxl. $18.99 ",
    },
    {
      title: "St. Louis Pizza",
      description:
        "Thin crust pizza, served with fresh marinara sauce, provel cheese, spicy peperonni and green peppers",
      price: "sm. $14.99, md. $15.99, lg. $16.99, xl. $18.99, xxl. $20.99 ",
    },
  ],
};

//// Pizza Sizes
const pizzaSizes = pizzaMenuDatabase.createYourOwnPizza.pizzaSizes;
const renderReadyPizzaSizes = pizzaSizes.map((size, index) => (
  <PizzaSizesContainer key={index}>
    <PizzaSizesSizes variant="h6">{`${size.size}`}</PizzaSizesSizes>
    <PizzaSizesPrice variant="h6">{`${size.price}`}</PizzaSizesPrice>
  </PizzaSizesContainer>
));

/// Pizza Crusts
const pizzaCrusts = pizzaMenuDatabase.createYourOwnPizza.crusts;
const renderReadyPizzaCrusts = pizzaCrusts.map((crust, index) => (
  <PizzaSizesSizes
    variant="h6"
    sx={{ textAlign: "center" }}
    key={index}
  >{`${crust.crust}`}</PizzaSizesSizes>
));
// Pizza Sauces
const pizzaSauce = pizzaMenuDatabase.createYourOwnPizza.sauces;
const renderReadyPizzaSauces = pizzaSauce.map((sauce, index) => (
  <PizzaSizesSizes
    variant="h6"
    sx={{ textAlign: "center" }}
    key={index}
  >{`${sauce}`}</PizzaSizesSizes>
));

// Vegetables
const vegetables = pizzaMenuDatabase.createYourOwnPizza.vegetables;
const renderReadyVegetablesToppings = vegetables.map((veggie, index) => (
  <PizzaSizesSizes
    variant="h6"
    sx={{ textAlign: "center" }}
    key={index}
  >{`${veggie}`}</PizzaSizesSizes>
));

// Meat
const meats = pizzaMenuDatabase.createYourOwnPizza.meats;
const renderReadyMeatsToppings = meats.map((item, index) => (
  <PizzaSizesSizes
    variant="h6"
    sx={{ textAlign: "center" }}
    key={index}
  >{`${item}`}</PizzaSizesSizes>
));

// other
const other = pizzaMenuDatabase.createYourOwnPizza.other;
const renderReadyOtherToppings = other.map((item, index) => (
  <PizzaSizesSizes
    variant="h6"
    sx={{ textAlign: "center" }}
    key={index}
  >{`${item}`}</PizzaSizesSizes>
));

/// Pizzas
const pizzas = pizzaMenuDatabase.pizza;
const renderReadyPizzas = pizzas.map((pizza, index) => {
  return (
    <PizzaItemContainer
      key={index}
      sx={{
        "@media (max-width:655px)": {
          marginLeft: "0",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "inherit",
          color: "secondary.light",
          borderBottom: "1px solid white",
          width: "max-content",
          justifySelf: "center",
          "@media (max-width:800px)": {
            fontSize: "28px",
          },
          "@media (max-width:540px)": {
            fontSize: "22px",
          },
          "@media (max-width:440px)": {
            fontSize: "18px",
          },
          "@media (max-width:350px)": {
            fontSize: "16px",
          },
        }}
      >
        &nbsp; {pizza.title} &nbsp;
      </Typography>
      <PizzaSizesSizes
        sx={{
          textAlign: "center",
          "@media (max-width:800px)": {
            fontSize: "16px",
            width: "max(80%,80%)",
            justifySelf: "center",
          },

          "@media (max-width:705px)": {
            marginTop: "5px",
          },
          "@media (max-width:540px)": {
            width: "max(100%,100%)",
          },
          "@media (max-width:440px)": {
            fontSize: "12px",
          },
        }}
      >
        {pizza.description}
      </PizzaSizesSizes>
      <PizzaSizesPrice
        sx={{
          justifySelf: "center",
          "@media (max-width:970px)": {
            width: "max(180px,180px)",
            fontSize: "12px",
          },
          "@media (max-width:800px)": {
            width: "max(180px,180px)",
          },
          "@media (max-width:440px)": {
            fontSize: "12px",
          },
        }}
      >
        {pizza.price}
      </PizzaSizesPrice>
    </PizzaItemContainer>
  );
});
const pizzaColumnHeight = renderReadyPizzas.length / 2;
const renderReadyPizzaColumnOne = renderReadyPizzas.slice(0, pizzaColumnHeight);
const renderReadyPizzaColumnTwo = renderReadyPizzas.slice(
  pizzaColumnHeight,
  renderReadyPizzas.length
);

export {
  renderReadyPizzaSizes,
  renderReadyPizzaCrusts,
  renderReadyPizzaSauces,
  renderReadyVegetablesToppings,
  renderReadyMeatsToppings,
  renderReadyOtherToppings,
  renderReadyPizzaColumnOne,
  renderReadyPizzaColumnTwo,
  pizzaMenuDatabase,
};
