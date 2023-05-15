import HomeSlider from "../components/sliders/HomeSlider";
import CustomCard from "../components/ui/CustomCard";
import data from "../lib/data/SliderCourses.json";
export default function Home() {
  const sliders = data.sliders;
  return (
    <div className="bg-gradient-to-b from-d-secondary">
      <HomeSlider courses={sliders}></HomeSlider>
    </div>
  );
}
