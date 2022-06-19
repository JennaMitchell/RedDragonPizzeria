import {
  StyledTypography,
  // PictureTextContainer,
  // RightImageContainer,
  // LeftImageContainer,
  ThreeRowsTextContainer,
} from "../general-styled-components/general-styled-components";
// import basilLineArt from "../../../../img/basil-lineart-2.png";
// import bellPepperLineArt from "../../../../img/bell-pepper-lineart-1.png";
// import cheddarLineArtOne from "../../../../img/cheddar-lineart-1.png";
// import cheddarLineArtTwo from "../../../../img/cheddar-lineart-2.png";
// import onionLineArt from "../../../../img/onion-lineart-1.png";
// import mushroomLineArt from "../../../../img/mushroom-lineart-1.png";

const saladData = [
  {
    title: "Caesar Salad ",
    description:
      "Romaine lettuce, croutons, and parmesan tossed with a dressing featuring lemon juice, olive oil, dijon mustard, worcestershire sauce, salt, and pepper",
    price: "sm. $6.99 md. $8.99 lg. $10.99",
  },
  {
    title: "Leafy Green Salad ",
    description: "Iceberg lettuce, arugula, and spinach",
    price: "sm. $4.99 md. $6.99 lg. $8.99",
  },
  {
    title: "Greek Salad ",
    description:
      "Tomatoes, cucumbers, olives, feta, and onions. Lightly dressed with olive oil, salt, pepper, and oregano.",
    price: "sm. $4.99 md. $6.99 lg. $8.99",
  },
  {
    title: "Garden Salad ",
    description: "Lettuce, tomatoes, mushrooms, olives and onions ",
    price: "sm. $5.99 md. $7.99 lg. $9.99",
  },
  {
    title: "Antipasta",
    description:
      "Lettuce, tomatoes, pepperoni, black olives, salami, mortadella, provolone, and mozzarella cheese",
    price: "sm. $5.99 md. $7.99 lg. $9.99",
  },
  {
    title: "Chef Salad ",
    description:
      "Lettuce, tomatoes, black olives, pepperoni, turkey, ham and provolone cheese ",
    price: "sm. $5.99 md. $7.99 lg. $9.99",
  },
];

const renderReadySaladData = saladData.map((salad, index) => {
  return (
    <ThreeRowsTextContainer>
      <StyledTypography
        variant="h4"
        sx={{
          textAlign: "center",
          width: "max(100%,100%)",
          marginTop: "10px",
        }}
      >
        {salad.title}
      </StyledTypography>
      <StyledTypography
        variant="p"
        sx={{
          textAlign: "center",
          width: "max(100%,100%)",
          marginTop: "10px",
        }}
      >
        {salad.description}
      </StyledTypography>
      <StyledTypography
        variant="p"
        sx={{
          textAlign: "center",
          width: "max(100%,100%)",
          marginTop: "10px",
        }}
      >
        {salad.price}
      </StyledTypography>
    </ThreeRowsTextContainer>
  );
});

const renderReadySaladDataColumnOne = renderReadySaladData.slice(0, 3);
const renderReadySaladDataColumnTwo = renderReadySaladData.slice(3, 6);

export {
  renderReadySaladDataColumnOne,
  renderReadySaladDataColumnTwo,
  saladData,
};
