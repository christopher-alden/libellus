import React, { Fragment, useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import HomeSliderCards from "../cards/HomeSliderCards";
import { Fade } from "react-reveal";

SwiperCore.use([Autoplay]);

export default function HomeSlider({ courses }) {
  const [currentItem, setCurrentItem] = useState(courses[0]);
  const [isChanged, setIsChanged] = useState(false);

  const handleSlideChange = (swiper) => {
    const { activeIndex } = swiper;
    setCurrentItem(courses[activeIndex]);
  };

  useEffect(() => {
    setIsChanged(false);
    setTimeout(() => {
      setIsChanged(true);
    }, 0);
  }, [currentItem]);

  return (
    <Fragment>
      <div className="flex justify-center items-center w-screen h-[800px] opacity-100 ">
        <div className="absolute w-[1200px] h-[600px] z-10 cover shadow-2xl">
          <div className="absolute z-20 w-[1000px] gap-4 flex flex-col bottom-14 left-14">
            <Fade bottom when={isChanged}>
              <div className=" text-5xl text-d-text font-bold line-clamp-1">
                {currentItem.title}
              </div>
              <div className=" text-xl text-d-text  line-clamp-2">
                {currentItem.description}
              </div>
              <div className=" flex flex-wrap ">
                {currentItem.tags.map((tag) => (
                  <div
                    key={tag}
                    className="mr-2 mb-2 px-2 py-1 text-d-text border-d-text border-2 rounded-lg text-sm"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </Fade>
          </div>
          <div className="absolute w-full h-full rounded-lg bg-gradient-to-t from-d-primary z-12"></div>
          <div className="absolute w-full h-full rounded-lg bg-d-primary z-11 opacity-20" />
          <img
            src={currentItem.bannerImage}
            alt={currentItem.title}
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
