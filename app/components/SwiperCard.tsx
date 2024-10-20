import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const datas = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
];

export const SwiperCard = () => {
  return (
    <Swiper
      className="w-[245px] h-[320px] rounded-lg"
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      loop={true}
      autoplay={{ delay: 2000 }}
      initialSlide={3}
    >
      {datas.map((data, index) => (
        <SwiperSlide
          key={index}
          className="cursor-pointer rounded-3xl shadow-2xl shadow-pink-200"
        >
          <img
            src={data}
            alt="image_album"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
