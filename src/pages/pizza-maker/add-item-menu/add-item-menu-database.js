const addItemMenuDatabase = {
  size: {
    active: true,
    data: [
      { type: "Small", price: "$6.99" },
      { type: "Medium", price: "$7.99" },
      { type: "Large", price: "$8.99" },
      { type: "X-large", price: "$10.99" },
      { type: "XX-large", price: "$12.99" },
    ],
  },
  crust: {
    active: false,
    data: [
      { type: "Thin", price: "-$1.00" },
      { type: "Hand Tossed", price: "$0.00" },
      { type: "Brooklyn Style", price: "+$0.99" },
      { type: "New York Style", price: "+$0.99" },
      { type: "Deep Dish", price: "+$1.99" },
    ],
  },
  sauce: {
    active: false,
    data: [
      { type: "Marinara", price: "$0.00" },
      { type: "BBQ", price: "$0.00" },
      { type: "Robust Tomato", price: "$0.00" },

      { type: "Alfredo", price: "$0.00" },
      { type: "Garlic Parmesan White", price: "$0.00" },
    ],
  },
  cheese: {
    active: false,
    data: [
      { type: "Mozzarella", price: "$0.00" },
      { type: "Provolone", price: "$0.00" },
      { type: "Cheddar", price: "$0.00" },
    ],
  },
  veggies: {
    active: false,
    data: [
      { type: "Green Pepper", price: " +$1.00" },
      { type: "Spinach", price: " +$1.00" },
      { type: "Jalapenos", price: " +$1.00" },
      { type: "Red Pepper", price: " +$1.00" },
      { type: "Black Olives", price: " +$1.00" },
      { type: "Mushrooms", price: " +$1.00" },
      { type: "Onion", price: " +$1.00" },
      { type: "Banana Pepper", price: " +$1.00" },
      { type: "Tomato Slices", price: " +$1.00" },
    ],
  },
  meats: {
    active: false,
    data: [
      { type: "Pepperoni", price: " +$1.00" },
      { type: "Bacon", price: " +$1.00" },
      { type: "Ham", price: " +$1.00" },
      { type: "Italian Sausage", price: " +$1.00" },
      { type: "Chicken", price: " +$1.00" },
    ],
  },
  other: {
    active: false,
    data: [
      { type: "Pineapple", price: " +$1.00" },
      { type: "Hot Sauces", price: " +$1.00" },
      { type: "Extra Cheese", price: " +$1.00" },
      { type: "Provolone", price: " +$1.00" },
      { type: "Cheddar Cheese", price: " +$1.00" },
      { type: "Feta Cheese", price: " +$1.00" },
      { type: "Parmesan-Asiago Cheese", price: " +$1.00" },
    ],
  },
  pepperoni: {
    active: false,
    data: [],
  },
};
export default addItemMenuDatabase;
