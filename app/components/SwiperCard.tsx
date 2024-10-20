import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

interface SwiperCardProps {
  datas: string[];
}

export const SwiperCard = ({ datas }: SwiperCardProps) => {
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
      {datas.map((data) => (
        <SwiperSlide key={data} className="cursor-pointer rounded-3xl">
          <img
            src={data}
            alt={data}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
