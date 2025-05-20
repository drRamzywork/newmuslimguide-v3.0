import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.scss";

const images = [
  "/assets/imgs/intro_1.jpg",
  "/assets/imgs/empty_book.png",
  "/assets/imgs/intro_1.jpg",
  "/assets/imgs/intro_1.jpg",
  "/assets/imgs/intro_1.jpg",
];

const RADIUS = 800; // Cylinder radius
const VISIBLE_COUNT = 5; // Number of visible slides (should be odd)
const ARC_DEGREES = 120; // Total arc for visible slides

export default function SwiperPanoramaSlider() {
  const swiperRef = useRef(null);

  // Custom panorama effect
  const onSetTranslate = (swiper) => {
    const total = swiper.slides.length;
    const half = Math.floor(VISIBLE_COUNT / 2);
    for (let i = 0; i < total; i++) {
      let pos = i - swiper.activeIndex;
      if (pos < -half) pos += total;
      if (pos > half) pos -= total;
      if (Math.abs(pos) > half) {
        swiper.slides[i].style.opacity = "0";
        swiper.slides[i].style.pointerEvents = "none";
        swiper.slides[i].style.transform = "none";
        continue;
      }
      const angle = (pos * ARC_DEGREES) / (VISIBLE_COUNT - 1);
      const opacity = 1 - Math.abs(pos) / (half + 1);
      swiper.slides[
        i
      ].style.transform = `rotateY(${angle}deg) translateZ(${RADIUS}px)`;
      swiper.slides[i].style.opacity = opacity;
      swiper.slides[i].style.zIndex = 10 - Math.abs(pos);
      swiper.slides[i].style.pointerEvents = "auto";
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("setTranslate", () =>
        onSetTranslate(swiperRef.current)
      );
      swiperRef.current.on("slideChange", () =>
        onSetTranslate(swiperRef.current)
      );
      // Initial set
      onSetTranslate(swiperRef.current);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBox}>
        <h2 className={styles.mainTitle}>مقدمات الكتاب</h2>
        <h3 className={styles.subTitle}>دليل المسلم فى جميع جوانب الحياة</h3>
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={VISIBLE_COUNT}
        centeredSlides={true}
        loop={true}
        navigation
        className={styles.swiper}
        style={{
          perspective: "2000px",
          overflow: "visible",
          padding: "60px 0",
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className={styles.image}
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
