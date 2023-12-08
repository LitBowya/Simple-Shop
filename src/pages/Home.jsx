
import Header from "../components/header/Header";
import WhyUs from "../components/whyUs/WhyUs";
import Departments from "../components/departments/Departments";
import Featured from "../components/featured-items/Featured";
import PcFeatured from "../components/pc featured/PcFeatured";
import OtherAccessories from "../components/other-accessories/OtherAccessories"
import Notice from "../components/notice/Notice";
import SpecialItems from "../components/special-items/SpecialItems";


const Home = () => {
  return (
    <div>
      <Header />
      <WhyUs />
      <Departments />
      <Featured />
      <PcFeatured />
      <OtherAccessories />
      <Notice />
      <SpecialItems />
    </div>
  );
};

export default Home;
