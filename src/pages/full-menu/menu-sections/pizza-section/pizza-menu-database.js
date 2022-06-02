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
      "Tomatoe Slices",
      "Fresh Onion",
      "Fresh Baby Spinach",
    ],
    meats: [
      "Peperoni",
      "Bacon",
      "Ham",
      "Beef",
      "Italian Sausage",
      "Chicken",
      "Salami",
      "Steak",
    ],
    other: [
      "Pineapple",
      "Hot Sauces",
      "Extra Cheese",
      "Shredded Provolone",
      "Cheddar Cheese",
      "Feta Cheese",
      "Parmesan-Asiago Cheese",
    ],
  },
  pizza: [
    {
      title: "Neapolitan Pizza",
      description:
        "Your choice of crust, topped with mozzarella cheese, fresh tomato's, and basil",
      price: "sm. $14.99, md. $15.99, lg. $16.99, xl. $18.99, xxl. $20.99 ",
    },
    {
      title: "Chicago Pizza",
      description:
        "Deep dish pizza, served with mozarallea,spicy peperonni and covered with marinara sauce",
      price: "sm. $12.99, md. $13.99, lg. $14.99, xl. $16.99, xxl. $18.99 ",
    },

    {
      title: "New York-Style Pizza",
      description:
        "Large hand-tossed thin crust pizza, served with mozzarella and spicy peperonni",
      price: "sm. $17.99, md. $18.99, lg. $19.99, xl. $21.99, xxl. $23.99 ",
    },
    //price: "$17.99 +",
    {
      title: "Sicilian Pizza",
      description:
        "Deep dish pizza, served with onions, tomatos and toma Cheese",
      price: "sm. $12.99, md. $13.99, lg. $14.99, xl. $16.99, xxl. $18.99 ",
    },
    {
      title: "Greek Pizza",
      description:
        "Your choice of crust, served with feta ,roasted red peppers, artichokes, olives and basil",
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
  <PizzaSizesContainer>
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
  >{`${crust.crust}`}</PizzaSizesSizes>
));
// Pizza Sauces
const pizzaSauce = pizzaMenuDatabase.createYourOwnPizza.sauces;
const renderReadyPizzaSauces = pizzaSauce.map((sauce, index) => (
  <PizzaSizesSizes
    variant="h6"
    sx={{ textAlign: "center" }}
  >{`${sauce}`}</PizzaSizesSizes>
));

// Vegetables
const vegetables = pizzaMenuDatabase.createYourOwnPizza.vegetables;
const renderReadyVegetablesToppings = vegetables.map((veggie, index) => (
  <PizzaSizesSizes
    variant="h6"
    sx={{ textAlign: "center" }}
  >{`${veggie}`}</PizzaSizesSizes>
));

// Meat
const meats = pizzaMenuDatabase.createYourOwnPizza.meats;
const renderReadyMeatsToppings = meats.map((item, index) => (
  <PizzaSizesSizes
    variant="h6"
    sx={{ textAlign: "center" }}
  >{`${item}`}</PizzaSizesSizes>
));

// other
const other = pizzaMenuDatabase.createYourOwnPizza.other;
const renderReadyOtherToppings = other.map((item, index) => (
  <PizzaSizesSizes
    variant="h6"
    sx={{ textAlign: "center" }}
  >{`${item}`}</PizzaSizesSizes>
));

/// Pizzas
const pizzas = pizzaMenuDatabase.pizza;
const renderReadyPizzas = pizzas.map((pizza) => {
  return (
    <PizzaItemContainer>
      <Typography
        variant="h5"
        sx={{ fontFamily: "inherit", color: "secondary.light" }}
      >
        {pizza.title}
      </Typography>
      <Typography
        variant="p"
        sx={{
          fontFamily: "inherit",
          color: "secondary.light",
          marginTop: "5px",
        }}
      >
        {pizza.description}
      </Typography>
      <Typography
        variant="p"
        sx={{
          fontFamily: "inherit",
          color: "secondary.light",
          marginTop: "5px",
        }}
      >
        {pizza.price}
      </Typography>
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
};
