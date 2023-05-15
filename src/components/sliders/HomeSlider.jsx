import React, { Fragment, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import HomeSliderCards from '../cards/HomeSliderCards';

SwiperCore.use([Autoplay]);

export default function HomeSlider({ courses }) {
  const [currentItem, setCurrentItem] = useState(courses[0]);

  const handleSlideChange = (swiper) => {
    const { activeIndex } = swiper;
    setCurrentItem(courses[activeIndex]);
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center w-screen h-[800px] opacity-100 ">
        <div className="absolute w-[1200px] h-[600px] z-10 cover shadow-2xl">
        <div className='absolute z-20 text-5xl text-d-text font-bold bottom-20 left-20'>{currentItem.title}</div>
        <div className='absolute w-full h-full rounded-xl bg-gradient-to-t from-d-primary z-11'></div>  
          <img
            src={currentItem.bannerImage}
            alt={currentItem.title}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="absolute mt-36 top-36 -right-28">
        <div className="w-[1600px] ">
          <Swiper
            slidesPerView={4}
            spaceBetween={250}
            centeredSlides={true}
            loop={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSlideChange={handleSlideChange}
          >
            {courses.map((course, index) => (
              <SwiperSlide key={course.id} className={index === 0 ? 'first-slide' : ''}>
                <HomeSliderCards
                  bannerImage={course.bannerImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
}
