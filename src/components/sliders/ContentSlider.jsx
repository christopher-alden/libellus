import ContentCard from '../cards/ContentCard';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import './ContentSlider.css';

SwiperCore.use([Navigation, Pagination]);

export default function ContentSlider({ title, courses, category }) {
  return (
    <div className="w-full flex justify-center ">
      <div className="flex-col w-[1400px]">
        <div className="text-3xl text-d-text font-bold mb-4 mx-auto">{title}</div>
        <div className="flex w-[1400px] mx-auto justify-between absolute translate-y-28">
          <img
            className="rotate-180 -translate-x-12"
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/100/f1f1f1/more-than.png"
            alt="more-than"
          />
          <img
            className="translate-x-12"
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/100/f1f1f1/more-than.png"
            alt="more-than"
          />
        </div>

        <Swiper
          navigation={true}
          pagination={false}
          slidesPerView={4}
          spaceBetween={40}>
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <ContentCard
                courses={course}
                category={category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
