import LandingCoursesCard from "../cards/LandingCoursesCard";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay]);
export default function LandingCoursesSlider({courses}){
    return(
        <>
        <Swiper
            slidesPerView={3}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            >
   
            {courses.map((course) => (
              <SwiperSlide key={course.skill}>
                <LandingCoursesCard courses={course}/>
              </SwiperSlide>
            ))}

          </Swiper>
        
        </>
    );
}