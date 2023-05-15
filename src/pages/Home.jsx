import HomeSlider from "../components/sliders/HomeSlider";
import data from '../lib/data/SliderCourses.json';
export default function Home(){
    const courses = data.courses;
    return(
        <div>
            <HomeSlider courses={courses}></HomeSlider>
        </div>
        
    );
}