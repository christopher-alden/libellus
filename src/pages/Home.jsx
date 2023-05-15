import ContentSlider from "../components/sliders/ContentSlider";
import HomeSlider from "../components/sliders/HomeSlider";
import SliderData from "../lib/data/SliderCourses.json";
import CourseData from "../lib/data/CoursesData.json";
export default function Home() {
  const sliders = SliderData.sliders;
  const python = CourseData.python
  const c = CourseData.c
  return (
    <div className="bg-gradient-to-b from-d-secondary h-[800px]">
      <HomeSlider courses={sliders}></HomeSlider>
      <div className="flex-col space-y-12">
      <ContentSlider title="Python 101" courses={python}></ContentSlider>
      <ContentSlider title="Binusian Nih Bos" courses={c}></ContentSlider>
      </div>
    </div>
  );
}
