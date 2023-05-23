import React, { Fragment, useState, useEffect } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import HomeSliderCard from '../cards/HomeSliderCard';
import HomeDisplayCard from '../cards/HomeDisplayCard';

SwiperCore.use([Autoplay]);

export default function HomeSlider({ courses }) {
  const [currentCourse, setcurrentCourse] = useState(courses[0]);

  const handleSlideChange = (swiper) => {
    const { activeIndex } = swiper;
    setcurrentCourse(courses[activeIndex]);
  };

  useEffect(() => {
    setcurrentCourse(courses[0]);
  }, [courses]);


  return (
    <Fragment>
      <div className="flex justify-center items-center w-full h-[550px] opacity-40 px-6 z-10 md:px-10 lg:px-16 md:h-[650px] lg:h-[800px]">
        <HomeDisplayCard course={currentCourse}/>
      </div>
      <div className="invisible absolute top-64 right-0 lg:visible -z-10 ">
        <div className="w-[1400px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={250}
            centeredSlides={true}
            loop={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSlideChange={handleSlideChange}>
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <HomeSliderCard bannerImage={course.bannerImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
}
