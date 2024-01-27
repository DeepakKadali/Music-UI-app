import { Swiper, SwiperSlide } from "swiper/react";

import Card from "../Card/Card";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CardCarouselSection.css";

import { Pagination, Navigation } from "swiper/modules";

const CardCarouselSection = ({ name, songsData }) => {
  return (
    <div className="swiper">
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation={{
          nextEl: `#${name.split(" ").join("")}-right`,
          prevEl: `#${name.split(" ").join("")}-left`,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {songsData.map((song) => (
          <SwiperSlide key={song.id}>
            <Card
              image={song.image}
              text={
                song.follows !== undefined
                  ? `${song.follows} Follows`
                  : `${song.likes} Likes`
              }
              title={song.title}
              tooltipText={song.songs?.length}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="left-btn slider-btn"
        id={`${name.split(" ").join("")}-left`}
      >
        <img src="./leftBtn.png" alt="Left Button" />
      </button>
      <button
        className="right-btn slider-btn"
        id={`${name.split(" ").join("")}-right`}
      >
        <img src="./rightBtn.png" alt="Right Button" />
      </button>
    </div>
  );
};

export default CardCarouselSection;
