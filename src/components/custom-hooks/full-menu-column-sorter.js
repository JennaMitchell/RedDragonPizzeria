import {
  FourColumnContainer,
  ThreeColumnContainer,
  TwoColumnContainer,
  OneColumnContainer,
} from "./full-menu-column-sorter-styled-components";

const fullMenuColumnsSorter = (data, maxNumberOfColumns) => {
  // Step 1. calculating the number of elements
  const numberOfDataEntries = data.length;

  const numberOfWholeColumns = Math.floor(
    numberOfDataEntries / maxNumberOfColumns
  );
  const remainingNumberOfItems = numberOfDataEntries % maxNumberOfColumns;
  let remainingRenderReadyItem = <></>;

  if (remainingNumberOfItems !== 0) {
    const remainingDataToRender = data.slice(remainingNumberOfItems * -1);
    switch (remainingNumberOfItems) {
      case 1:
        remainingRenderReadyItem = (
          <OneColumnContainer
            sx={{
              marginTop: "0px",
              marginBottom: "30px",
              width: "max(33.33%,33.33%)",
            }}
          >
            {remainingDataToRender}
          </OneColumnContainer>
        );
        break;
      case 2:
        remainingRenderReadyItem = (
          <TwoColumnContainer
            sx={{
              marginTop: "0px",
              marginBottom: "30px",
              width: "max(66.66%,66.66%)",
            }}
          >
            {remainingDataToRender}
          </TwoColumnContainer>
        );
        break;
      case 3:
        remainingRenderReadyItem = (
          <ThreeColumnContainer sx={{ marginTop: "0px", marginBottom: "30px" }}>
            {remainingDataToRender}
          </ThreeColumnContainer>
        );
        break;
      default:
        break;
    }
  }

  const evenlySliceableData = data.slice(
    0,
    numberOfWholeColumns * maxNumberOfColumns
  );
  let evenlySliceableRenderReadyItems = <></>;
  switch (maxNumberOfColumns) {
    case 1:
      evenlySliceableRenderReadyItems = (
        <OneColumnContainer>{evenlySliceableData}</OneColumnContainer>
      );
      break;
    case 2:
      evenlySliceableRenderReadyItems = (
        <TwoColumnContainer>{evenlySliceableData}</TwoColumnContainer>
      );
      break;
    case 3:
      evenlySliceableRenderReadyItems = (
        <ThreeColumnContainer>{evenlySliceableData}</ThreeColumnContainer>
      );
      break;
    case 4:
      evenlySliceableRenderReadyItems = (
        <FourColumnContainer>{evenlySliceableData}</FourColumnContainer>
      );
      break;
    default:
      break;
  }

  return (
    <>
      {evenlySliceableRenderReadyItems}
      {remainingRenderReadyItem.length !== 0 && remainingRenderReadyItem}
    </>
  );
};
export default fullMenuColumnsSorter;
