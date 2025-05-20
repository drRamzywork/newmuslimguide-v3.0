"use client";

import Marquee from "react-fast-marquee";
import styles from "./index.module.scss";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.panoramaWrapper}>
        <Marquee gradient={false} speed={40} pauseOnHover={false} loop={0}>
          <img
            src="/test2.png"
            alt="panorama"
            className={styles.panoramaImage}
          />{" "}
          <img
            src="/test2.png"
            alt="panorama"
            className={styles.panoramaImage}
          />
          <img
            src="/test2.png"
            alt="panorama"
            className={styles.panoramaImage}
          />
          <img
            src="/test2.png"
            alt="panorama"
            className={styles.panoramaImage}
          />
          <img
            src="/test2.png"
            alt="panorama"
            className={styles.panoramaImage}
          />
          <img
            src="/test2.png"
            alt="panorama"
            className={styles.panoramaImage}
          />
          <img
            src="/test2.png"
            alt="panorama"
            className={styles.panoramaImage}
          />
          <img
            src="/test2.png"
            alt="panorama"
            className={styles.panoramaImage}
          />
          <img
            src="/test2.png"
            alt="panorama"
            className={styles.panoramaImage}
          />
        </Marquee>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.sec_container}>
        <div className={styles.dark_logo}>
          <img src="/assets/imgs/logo-dark.png" alt="" />
        </div>
        <div className={styles.title}>
          <h2>
            موقع دليل المسلم الميسر هو نسخة إلكترونية من كتاب (دليل المسلم
            الميسر)
          </h2>
        </div>
      </div>
    </section>
  );
}
