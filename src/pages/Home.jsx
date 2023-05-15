import HomeSlider from "../components/sliders/HomeSlider";
import data from '../lib/data/SliderCourses.json';
export default function Home(){
    const courses = data.courses;
    return(
        <div className="bg-gradient-to-b from-d-secondary">
            <HomeSlider courses={courses}></HomeSlider>
        </div>
        
    );
}