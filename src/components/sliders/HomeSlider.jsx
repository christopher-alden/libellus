import React, { Fragment, useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTransition, animated } from "react-spring";
import "swiper/css";
import "swiper/css/pagination";
import HomeSliderCards from "../cards/HomeSliderCards";

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

  const fadeTransitions = useTransition(currentCourse, {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });

  return (
    <Fragment>
      <div className="flex justify-center items-center w-screen h-[800px] opacity-100 ">
        <div className="absolute w-[1200px] h-[600px] z-10 cover shadow-2xl">
          <div className="absolute z-20 w-[1000px] gap-4 flex flex-col bottom-14 left-14">
            {fadeTransitions((style, course) => (
              <animated.div
                className="text-5xl text-d-text font-bold line-clamp-1"
                style={style}
                key={course.id}
              >
                {course.title}
              </animated.div>
            ))}
            {fadeTransitions((style, course) => (
              <animated.div
                className="text-xl text-d-text line-clamp-2"
                style={style}
                key={course.id}
              >
                {course.description}
              </animated.div>
            ))}
            {fadeTransitions((style, course) => (
              <animated.div
                className="flex flex-wrap"
                style={style}
                key={course.id}
              >
                {course.tags.map((tag) => (
                  <div
                    key={tag}
                    className="mr-2 mb-2 px-2 py-1 text-d-text border-d-text border-2 rounded-lg text-sm"
                  >
                    {tag}
                  </div>
                ))}
              </animated.div>
            ))}
          </div>
          <div className="absolute w-full h-full rounded-lg bg-gradient-to-t from-d-primary z-12"></div>
          <div className="absolute w-full h-full rounded-lg bg-d-primary z-11 opacity-20" />
          <img
            src={currentCourse.bannerImage}
            alt={currentCourse.title}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="absolute mt-36 top-28 -right-28">
        <div className="w-[1600px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={250}
            centeredSlides={true}
            loop={false}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            onSlideChange={handleSlideChange}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <HomeSliderCards bannerImage={course.bannerImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
}
