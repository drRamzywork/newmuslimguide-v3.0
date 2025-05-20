"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.scss";

const slides = [
  "/assets/imgs/intro_1.jpg",
  "/assets/imgs/empty_book.png",
  "/assets/imgs/intro_1.jpg",
  "/assets/imgs/intro_1.jpg",
  "/assets/imgs/intro_1.jpg",
];

export default function PanoramaSlider() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBox}>
        <h2 className={styles.mainTitle}>مقدمات الكتاب</h2>
        <h3 className={styles.subTitle}>دليل المسلم فى جميع جوانب الحياة</h3>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={-100}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        navigation
        modules={[Navigation]}
        className={styles.swiper}
        onSwiper={(swiper) => {
          swiper.on("setTranslate", () => {
            swiper.slides.forEach((slide, i) => {
              const slideOffset = slide.swiperSlideOffset;
              const center = swiper.width / 2;
              const offset = slideOffset + slide.offsetWidth / 2 - center;
              const rotateY = offset / 10;
              const scale = 1 - Math.abs(offset) / 1000;
              slide.style.transform = `translateZ(0px) rotateY(${rotateY}deg) scale(${scale})`;
              slide.style.zIndex = -Math.abs(Math.round(offset));
            });
          });
        }}
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
