import ToppingsLayoutOne from "./pizza-toppings-image-layouts/toppings-layout-one";
import ToppingsLayoutTwo from "./pizza-toppings-image-layouts/toppings-layout-two";
import ToppingsLayoutThree from "./pizza-toppings-image-layouts/toppings-layout-three";
import ToppingsLayoutFour from "./pizza-toppings-image-layouts/toppings-layout-four";
import ToppingsLayoutFive from "./pizza-toppings-image-layouts/toppings-layout-five";
import pizzaToppingsPhotoDatabase from "./pizza-toppings-photo-database";

const PizzaToppingsImageManager = ({ veggies, meats, other, cheese }) => {
  const combinedToppingsArray = [...veggies, ...meats, ...other];

  const photoArray = [];
  for (let topping of combinedToppingsArray) {
    if (topping !== "Extra Cheese") {
      photoArray.push({
        img: pizzaToppingsPhotoDatabase[topping],
        alt: topping,
      });
    } else {
      switch (cheese) {
        case "Mozzarella":
          photoArray.push({
            img: pizzaToppingsPhotoDatabase["Mozzarella"],
            alt: "Mozzarella",
          });
          break;
        case "Provolone":
          photoArray.push({
            img: pizzaToppingsPhotoDatabase["Provolone"],
            alt: "Provolone",
          });
          break;
        case "Cheddar":
          photoArray.push({
            img: pizzaToppingsPhotoDatabase["Cheddar Cheese"],
            alt: "Cheddar Cheese",
          });
          break;
        default:
          break;
      }
    }
  }
  const renderReadyToppingsData = photoArray.map((img, index) => {
    let tempImageHolder = "";
    switch (index) {
      case 0:
        tempImageHolder = (
          <ToppingsLayoutOne key={index} image={img.img} alt={img.alt} />
        );
        break;
      case 1:
        tempImageHolder = (
          <ToppingsLayoutTwo key={index} image={img.img} alt={img.alt} />
        );
        break;
      case 2:
        tempImageHolder = (
          <ToppingsLayoutThree key={index} image={img.img} alt={img.alt} />
        );
        break;
      case 3:
        tempImageHolder = (
          <ToppingsLayoutFour key={index} image={img.img} alt={img.alt} />
        );
        break;
      case 4:
        tempImageHolder = (
          <ToppingsLayoutFive key={index} image={img.img} alt={img.alt} />
        );
        break;
      default:
        break;
    }

    return tempImageHolder;
  });

  return <>{renderReadyToppingsData}</>;
};
export default PizzaToppingsImageManager;
