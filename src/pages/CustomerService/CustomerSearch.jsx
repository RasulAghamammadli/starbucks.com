// import React from 'react'
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import sbux from "../../assets/images/sbux_bg.jpg";

// Icons
import { IoIosSearch } from "react-icons/io";

const CustomerSearch = () => {
  return (
    <>
      <section className="customer-search">
        <div className="img">
          <img src={sbux} alt="" />
        </div>
        <div className="container">
          <div className="search-inner">
            <div className="search-side">
              <h1 className="title">Starbucks Customer Service</h1>
              <div className="search-box">
                <input type="text" placeholder="How can we help you?" />
                <IoIosSearch className="search-icon" />
              </div>
              <div className="suggestions">
                <h4 className="head">Suggestions:</h4>
                <div className="boxes">
                  <p>Missing stars</p>
                  <p>Order was incomplete</p>
                  <p>Apple Pay</p>
                </div>
              </div>
            </div>
            <div className="info-side">
              <div className="info-box">
                <Swiper
                  spaceBetween={30}
                  effect={"fade"}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation, Pagination, EffectFade]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <h3 className="title">Coffee, Meet More Rewards</h3>
                    <p className="text">
                      Link your Starbucks Rewards account with an eligible Bank
                      of America debit or credit card and enjoy exciting
                      benefits on qualifying in-app purchases. ...
                    </p>
                    <Link className="btn" to="/our-coffee">
                      Read More
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h3 className="title">More Sips, More Trips</h3>
                    <p className="text">
                      Link your Delta SkyMiles® and Starbucks® Rewards accounts
                      to start earning 1 mile per $1* spent at Starbucks.
                      Through the partnership, Delta SkyMiles...
                    </p>
                    <Link className="btn" to="/about-us">
                      Read More
                    </Link>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customer-search-mobile">
        <div className="container">
          {/* Mobile Slider */}
          <div className="info-side-mobile">
            <div className="info-box">
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation, Pagination, EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <h3 className="title">Coffee, Meet More Rewards</h3>
                  <p className="text">
                    Link your Starbucks Rewards account with an eligible Bank of
                    America debit or credit card and enjoy exciting benefits on
                    qualifying in-app purchases. ...
                  </p>
                  <Link className="btn" to="/our-coffee">
                    Read More
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <h3 className="title">More Sips, More Trips</h3>
                  <p className="text">
                    Link your Delta SkyMiles® and Starbucks® Rewards accounts to
                    start earning 1 mile per $1* spent at Starbucks. Through the
                    partnership, Delta SkyMiles...
                  </p>
                  <Link className="btn" to="/about-us">
                    Read More
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerSearch;
