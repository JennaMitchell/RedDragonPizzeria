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
      " Romaine lettuce, croutons, and Parmesan tossed with a dressing featuring lemon juice, olive oil, Dijon mustard, Worcestershire sauce, salt, and pepper",
    price: "Small. $6.99 Med. $8.99 Lg. $10.99",
  },
  {
    title: "Leafy Green Salad ",
    description: "Iceberg lettuce, arugula, and spinach",
    price: "Small. $4.99 Med. $6.99 Lg. $8.99",
  },
  {
    title: "Greek Salad ",
    description:
      "Tomatoes, cucumbers, olives, feta, and onions. Lightly dressed with olive oil, salt, pepper, and oregano. ",
    price: "Small. $4.99 Med. $6.99 Lg. $8.99",
  },
  {
    title: "Garden Salad ",
    description: "Lettuce, Tomatoes, Mushrooms, Olives and Onions  ",
    price: "Small. $5.99 Med. $7.99 Lg. $9.99",
  },
  {
    title: "Antipasta",
    description:
      "Lettuce, Tomatoes, Pepperoni, Black Olives, Salami, Mortadella, Provolone, and Mozzarella Cheese",
    price: "Small. $5.99 Med. $7.99 Lg. $9.99",
  },
  {
    title: "Chef Salad ",
    description:
      "Lettuce, Tomatoes, Black Olives, Pepperoni, Turkey, Ham and Provolone Cheese ",
    price: "Small. $5.99 Med. $7.99 Lg. $9.99",
  },
];

// const renderReadySaladData = saladData.map((salad, index) => {
//   if (index % 2 === 0) {
//     return (
//       <PictureTextContainer key={index}>
//         <LeftImageContainer alt={salad.title} src={salad.img} />
//         <ThreeRowsTextContainer>
//           <StyledTypography
//             variant="h4"
//             sx={{ textAlign: "left", width: "max(100%,100%)" }}
//           >
//             {salad.title}
//           </StyledTypography>
//           <StyledTypography
//             variant="p"
//             sx={{
//               textAlign: "left",
//               width: "max(100%,100%)",
//               marginTop: "10px",
//             }}
//           >
//             {salad.description}
//           </StyledTypography>
//           <StyledTypography
//             variant="p"
//             sx={{
//               textAlign: "left",
//               width: "max(100%,100%)",
//               marginTop: "10px",
//             }}
//           >
//             {salad.price}
//           </StyledTypography>
//         </ThreeRowsTextContainer>
//       </PictureTextContainer>
//     );
//   } else {
//     return (
//       <PictureTextContainer key={index}>
//         <ThreeRowsTextContainer>
//           <StyledTypography
//             variant="h4"
//             sx={{
//               textAlign: "right",
//               width: "max(100%,100%)",
//               marginTop: "10px",
//             }}
//           >
//             {salad.title}
//           </StyledTypography>
//           <StyledTypography
//             variant="p"
//             sx={{
//               textAlign: "right",
//               width: "max(100%,100%)",
//               marginTop: "10px",
//             }}
//           >
//             {salad.description}
//           </StyledTypography>
//           <StyledTypography
//             variant="p"
//             sx={{
//               textAlign: "right",
//               width: "max(100%,100%)",
//               marginTop: "10px",
//             }}
//           >
//             {salad.price}
//           </StyledTypography>
//         </ThreeRowsTextContainer>
//         <RightImageContainer alt={salad.title} src={salad.img} />
//       </PictureTextContainer>
//     );
//   }
// });

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

export { renderReadySaladDataColumnOne, renderReadySaladDataColumnTwo };
