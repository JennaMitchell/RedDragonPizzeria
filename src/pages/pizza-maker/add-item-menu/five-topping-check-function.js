import { useSelector } from "react-redux";

const useFiveToppingCheck = () => {
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );
  const toppingsArray = ["veggies", "meats", "other"];
  let totalNumberOfToppings = 0;
  for (let i = 0; i < toppingsArray.length; i++) {
    totalNumberOfToppings =
      totalNumberOfToppings +
      buildAPizzaUserSelectedObject[toppingsArray[i]].length;
  }
  if (totalNumberOfToppings >= 5) {
    return true;
  } else {
    return false;
  }
};
export default useFiveToppingCheck;
