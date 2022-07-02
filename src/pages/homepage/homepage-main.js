import PhotoCarouselMainPage from "./photo-carousel/photo-carousel-main-page";
import HomepageMenuTopFile from "./menu-section/homepage-menu-main-page";
import CustomPizzaSectionMainPage from "./custom-pizza-section/custom-pizza-main-page";
import { useSelector, useDispatch } from "react-redux";
import { storeActions } from "../../store/store";

const HomePageMain = () => {
  const dispatch = useDispatch();
  const activeNavButton = useSelector((state) => state.activeNavButton);

  /// check to see if user closed  on a different tab  but re-entered on this page. causing the active button to be misaligned
  if (activeNavButton !== "Home") {
    dispatch(storeActions.setActiveNavButton("Home"));
  }
  return (
    <>
      <PhotoCarouselMainPage />
      <HomepageMenuTopFile />
      <CustomPizzaSectionMainPage />
    </>
  );
};
export default HomePageMain;
