// import React from 'react'
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// context
import { useMainContext } from "../../utils/MainContext";

const PetDay = () => {
  // Gift Data
  const { giftItems } = useMainContext();

  // Find Category
  const petDay = giftItems.find((item) => item.category === "Pet day");

  return (
    <section className="gift-cards">
      <div className="gift-cards-header">
        <h2 className="title">{petDay?.category}</h2>
      </div>
      <div className="gift-cards-slider">
        <Swiper
          slidesPerView={4}
          spaceBetween={32}
          breakpoints={{
            280: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            480: {
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          loop={false}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {petDay?.cards?.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                to={`/gift/${petDay.category}/${item.id}`}
                className="slide-item"
              >
                <img src={item.img} alt="" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PetDay;
