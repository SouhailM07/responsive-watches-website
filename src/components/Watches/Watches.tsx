import "./watches.css";
// assets
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { EffectCreative } from "swiper/modules";
// import required modules
import { Pagination } from "swiper/modules";
// assets
import watch_1 from "/watches-1.png";
import watch_2 from "/watches-2.png";
import watch_3 from "/watches-3.png";
export default function Watches() {
  const watches: string[] = [watch_1, watch_2, watch_3];
  return (
    <div className="md:h-[35rem] h-[30rem] md:mr-[2rem]">
      <Swiper
        grabCursor={true}
        loop
        effect={"creative"}
        creativeEffect={{
          prev: {
            translate: [-100, 0, -500],
            rotate: [0, 0, 15],
            opacity: 0,
          },
          next: {
            translate: [100, 0, -500],
            rotate: [0, 0, -15],
            opacity: 0,
          },
        }}
        pagination
        modules={[EffectCreative, Pagination]}
        className="w-[30rem] h-full"
      >
        {watches.map((e, i) => {
          return (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <img src={e} alt="" className="h-[20rem] lg:h-[32rem] " />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
