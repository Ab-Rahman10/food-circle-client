import Slider from "../Components/Slider/Slider";
import FeaturedFoods from "../Components/FeaturedFoods";
import OurImpact from "../Components/OurImpact/OurImpact";
import SeasonalFeast from "../Components/HowItWorks/SeasonalFeast";
import FoodDiscovery from "../Components/FoodDiscovery/FoodDiscovery";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedFoods />
      <FoodDiscovery></FoodDiscovery>
      <OurImpact></OurImpact>
      <SeasonalFeast></SeasonalFeast>
    </div>
  );
};

export default Home;
