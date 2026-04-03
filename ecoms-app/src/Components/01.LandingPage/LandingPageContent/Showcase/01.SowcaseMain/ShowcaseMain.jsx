import ElectronicsGadgets from "../Category/Electronics & Gadgets/ElectronicsGadgets";
import FashionApparel from "../Category/Fashion & Apparel/FashionApparel";
import BeautyPersonalCare from "../Category/Beauty & Personal Care/BeautyPersonalCare";
import HomeKitchen from "../Category/Home & Kitchen/HomeKitchen";
const ShowcaseMain = () => {
  return (
    <div>
      <ElectronicsGadgets />
      <FashionApparel />
      <BeautyPersonalCare />
      <HomeKitchen />
    </div>
  );
};

export default ShowcaseMain;
