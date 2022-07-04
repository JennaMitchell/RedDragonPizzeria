import {
  CategoryButton,
  TopContainer,
  InfoContainer,
  ThreeColumnRow,
  TwoColumnRow,
  SelectorContainer,
  SelectorTitle,
  OneColumnRow,
  MaxContentContainer,
} from "./add-item-menu-option-container-styled-components.js";

import AddItemMenuOptionButton from "./add-item-menu-option-button.js";
import { useSelector } from "react-redux";
import AddItemMenuPepperoniSection from "./add-item-menu-pepperoni-section.js";

const AddItemMenuOptionContainer = ({
  data,
  active,
  objectSection,
  categoryButtonHandler,
}) => {
  const numberOfRows = Math.floor(data.length / 3);
  const renderReadyThreeColumnRows = [];
  const renderReadyTwoColumnRow = [];
  const renderReadyOneColumnRow = [];
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );
  // creating the active array by checking the buildAPizzaUserSelectedObject object in storage
  let activeButtonArray = [];
  for (let q = 0; q < data.length; q++) {
    if (buildAPizzaUserSelectedObject[objectSection].length !== 0) {
      if (buildAPizzaUserSelectedObject[objectSection].includes(data[q].type)) {
        activeButtonArray[q] = true;
      }
    } else {
      activeButtonArray[q] = false;
    }
  }

  const categoryButtonCaller = () => {
    categoryButtonHandler(objectSection);
  };

  for (let i = 0; i < numberOfRows; i++) {
    let numberSpanStart = (i + 1) * 3 - 3;
    //{ type, active, objectSection }

    renderReadyThreeColumnRows[i] = (
      <ThreeColumnRow key={` ${objectSection} ${i}`}>
        <SelectorContainer>
          <AddItemMenuOptionButton
            type={data[numberSpanStart]}
            objectSection={objectSection}
            active={activeButtonArray[numberSpanStart]}
          />
          <SelectorTitle>{data[numberSpanStart].type}</SelectorTitle>
        </SelectorContainer>

        <SelectorContainer>
          <AddItemMenuOptionButton
            type={data[numberSpanStart + 1]}
            objectSection={objectSection}
            active={activeButtonArray[numberSpanStart + 1]}
          />
          <SelectorTitle>{data[numberSpanStart + 1].type}</SelectorTitle>
        </SelectorContainer>

        <SelectorContainer>
          <AddItemMenuOptionButton
            type={data[numberSpanStart + 2]}
            objectSection={objectSection}
            active={activeButtonArray[numberSpanStart + 2]}
          />
          <SelectorTitle>{data[numberSpanStart + 2].type}</SelectorTitle>
        </SelectorContainer>
      </ThreeColumnRow>
    );
  }
  // if the number of items is not equally devisable by three we need to create a special last row

  if (data.length % 3 === 1) {
    renderReadyOneColumnRow[0] = (
      <MaxContentContainer key={` ${objectSection} ${data.length - 1}`}>
        <OneColumnRow>
          <SelectorContainer>
            <AddItemMenuOptionButton
              type={data[data.length - 1]}
              objectSection={objectSection}
              active={activeButtonArray[data.length - 1]}
            />
            <SelectorTitle>{data[data.length - 1].type}</SelectorTitle>
          </SelectorContainer>
        </OneColumnRow>
      </MaxContentContainer>
    );
  }

  if (data.length % 3 === 2) {
    renderReadyTwoColumnRow[0] = (
      <TwoColumnRow key={` ${objectSection} ${data.length - 2}`}>
        <MaxContentContainer>
          <SelectorContainer
            sx={{
              "@media(max-width:590px)": {
                marginLeft: `${
                  data[data.length - 2].type === "Alfredo" && "40px"
                }`,
              },
            }}
          >
            <AddItemMenuOptionButton
              type={data[data.length - 2]}
              objectSection={objectSection}
              active={activeButtonArray[data.length - 2]}
            />
            <SelectorTitle>{data[data.length - 2].type}</SelectorTitle>
          </SelectorContainer>
        </MaxContentContainer>

        <MaxContentContainer>
          <SelectorContainer
            sx={{
              marginLeft: `${
                data[data.length - 1].type === "Garlic Parmesan White" && "80px"
              }`,
              "@media(max-width:590px)": {
                marginLeft: `${
                  data[data.length - 1].type === "Garlic Parmesan White" &&
                  "10px"
                }`,
                marginRight: `${
                  data[data.length - 1].type === "Garlic Parmesan White" &&
                  "40px"
                }`,
              },
            }}
          >
            <AddItemMenuOptionButton
              type={data[data.length - 1]}
              objectSection={objectSection}
              active={activeButtonArray[data.length - 1]}
            />
            <SelectorTitle>{data[data.length - 1].type}</SelectorTitle>
          </SelectorContainer>
        </MaxContentContainer>
      </TwoColumnRow>
    );
  }

  // creating the final render Ready  Data

  let renderReadyData = renderReadyThreeColumnRows;
  if (renderReadyOneColumnRow.length !== 0) {
    renderReadyData.push(renderReadyOneColumnRow[0]);
  }
  if (renderReadyTwoColumnRow.length !== 0) {
    renderReadyData.push(renderReadyTwoColumnRow[0]);
  }
  if (objectSection === "pepperoni") {
    renderReadyData = (
      <AddItemMenuPepperoniSection
        crust={buildAPizzaUserSelectedObject.size[0]}
      />
    );
  }
  // renderReadyData = renderReadyData.map((code) => code);
  // // combining the rows into one mega ready object

  return (
    <TopContainer key={objectSection}>
      <CategoryButton onClick={categoryButtonCaller}>
        {objectSection}
      </CategoryButton>
      {active && <InfoContainer>{renderReadyData}</InfoContainer>}
    </TopContainer>
  );
};
export default AddItemMenuOptionContainer;
