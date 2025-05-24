import React from "react";
import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import FreePanoramaSlider from "../FreePanoramaSlider";
import Link from "next/link";

const Intro = () => {
  return (
    <>
      <section id="intro" className={styles.intro}>
        {/* <div className="container">
          <div className="main_title page dark">
            <h2>المقدمات</h2>
          </div>

        
        </div>
        <div className="sec_container">
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            spaceBetween={24}
            slidesPerView={3.1}
            navigation
            initialSlide={2}
            centeredSlides={true}
            style={{ padding: "20px 0" }}
          >
            <SwiperSlide>
              <img
                src="/assets/imgs/intro_1.jpg"
                alt="Main Book"
                style={{
                  width: "100%",
                  borderRadius: "0px",
                  objectFit: "contain",
                  height: "450px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/imgs/sdide-1.png"
                alt="Empty Book"
                style={{
                  width: "100%",
                  borderRadius: "0px",
                  objectFit: "cover",
                  height: "450px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/imgs/sdide-2.png"
                alt="Main Book Repeat"
                style={{
                  width: "100%",
                  borderRadius: "0px",
                  objectFit: "cover",
                  height: "450px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/imgs/intro_1.jpg"
                alt="Main Book"
                style={{
                  width: "100%",
                  borderRadius: "0px",
                  objectFit: "contain",
                  height: "450px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/imgs/sdide-1.png"
                alt="Empty Book"
                style={{
                  width: "100%",
                  borderRadius: "0px",
                  objectFit: "cover",
                  height: "450px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/imgs/sdide-2.png"
                alt="Main Book Repeat"
                style={{
                  width: "100%",
                  borderRadius: "0px",
                  objectFit: "cover",
                  height: "450px",
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div> */}
        <FreePanoramaSlider />
      </section>
    </>
  );
};
export default Intro;
