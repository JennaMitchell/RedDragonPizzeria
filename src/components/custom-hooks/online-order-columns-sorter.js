import {
  FourColumnContainer,
  ThreeColumnContainer,
  TwoColumnContainer,
  OneColumnContainer,
  RemainderContainer,
} from "../../pages/order-online/order-online-menu-blackboard-styled-components";

const onlineOrderColumnsSorter = (data, maxNumberOfColumns) => {
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
          <RemainderContainer>
            <OneColumnContainer sx={{ marginTop: "0px", marginBottom: "30px" }}>
              {remainingDataToRender}
            </OneColumnContainer>
          </RemainderContainer>
        );
        break;
      case 2:
        remainingRenderReadyItem = (
          <RemainderContainer>
            <TwoColumnContainer sx={{ marginTop: "0px", marginBottom: "30px" }}>
              {remainingDataToRender}
            </TwoColumnContainer>
          </RemainderContainer>
        );
        break;
      case 3:
        remainingRenderReadyItem = (
          <RemainderContainer>
            <ThreeColumnContainer
              sx={{ marginTop: "0px", marginBottom: "30px" }}
            >
              {remainingDataToRender}
            </ThreeColumnContainer>
          </RemainderContainer>
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
export default onlineOrderColumnsSorter;
