import BeautyPersonalCare from "../Category/Beauty & Personal Care/BeautyPersonalCare";
import ElectronicsGadgets from "../Category/Electronics & Gadgets/ElectronicsGadgets";
import FashionApparel from "../Category/Fashion & Apparel/FashionApparel";
const ShowcaseMain = () => {
  return (
    <div>
      <ElectronicsGadgets />
      <FashionApparel />
      <BeautyPersonalCare />
    </div>
  );
};

export default ShowcaseMain;
