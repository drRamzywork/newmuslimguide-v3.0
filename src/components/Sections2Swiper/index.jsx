import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Sections2Swiper = () => {
  const slides = [
    {
      title: "صيام المسلم",
      description: `فرض الله على المسلمين الصيام شهراً واحداً في السنة، هو شهر رمضان المبارك، وجعله الركن الرابع من أركان الإسلام ومبانيه العظام، قال الله تعالى: {يََا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُون} (البقرة: 183).`,
      image: "/assets/imgs/bg-sec-2.jpg",
    },
    {
      title: "صيام المسلم",
      description: `فرض الله على المسلمين الصيام شهراً واحداً في السنة، هو شهر رمضان المبارك، وجعله الركن الرابع من أركان الإسلام ومبانيه العظام، قال الله تعالى: {يََا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُون} (البقرة: 183).`,
      image: "/assets/imgs/bg-sec-2.jpg",
    },
    {
      title: "صيام المسلم",
      description: `فرض الله على المسلمين الصيام شهراً واحداً في السنة، هو شهر رمضان المبارك، وجعله الركن الرابع من أركان الإسلام ومبانيه العظام، قال الله تعالى: {يََا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُون} (البقرة: 183).`,
      image: "/assets/imgs/bg-sec-2.jpg",
    },
  ];

  return (
    <section id="sections2" className={style.sections2}>
      <div className="container">
        <div className={style.boxes_container}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className={style.swiper}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={style.box_container}>
                  <div className={style.box}>
                    <div className={style.img_container}>
                      <Image
                        alt=""
                        src={slide.image}
                        width={267}
                        height={268}
                      />
                    </div>
                    <div className={style.title}>
                      <h3>{slide.title}</h3>
                    </div>
                    <div className={style.desc}>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                  <button className={"read_more"}>
                    <p>المزيد</p>
                    <FaArrowLeftLong />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Sections2Swiper;
