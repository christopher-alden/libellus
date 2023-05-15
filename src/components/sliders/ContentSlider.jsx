import ContentCard from "../cards/ContentCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

export default function ContentSlider({ title, courses }) {
  return (
    <div className="w-full flex justify-center">
        <div className="flex-col w-[1500px]">
        <div className="text-3xl text-d-text font-bold mb-4">{title}</div>
        <Swiper navigation={false} pagination={false} slidesPerView={4}>
            {courses.map((course) => (
            <SwiperSlide key={course.id}>
                <ContentCard courses={course} />
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </div>
  );
}
