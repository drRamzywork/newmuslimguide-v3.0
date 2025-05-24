import React, { useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const images = [
  "/assets/imgs/intro_1.jpg",
  "/assets/imgs/sdide-1.png",
  "/assets/imgs/sdide-2.png",
  "/assets/imgs/sdide-1.png",
  "/assets/imgs/sdide-2.png",
];

const SLIDE_WIDTH = 400;
const SLIDE_HEIGHT = 450;
const RADIUS = 800; // Cylinder radius
const VISIBLE_COUNT = 5; // Number of visible slides (should be odd)
const ARC_DEGREES = 120; // Total arc for visible slides

export default function FreePanoramaSlider() {
  const [active, setActive] = useState(0);
  const total = images.length;
  const half = Math.floor(VISIBLE_COUNT / 2);

  const goLeft = () => setActive((prev) => (prev - 1 + total) % total);
  const goRight = () => setActive((prev) => (prev + 1) % total);

  return (
    <div className={styles.wrapper}>
      <div className="main_title page">
        <h2>المقدمات</h2>
      </div>

      <div className={styles.nav}>
        <ul>
          <li>
            <Link href="/">الرئيسية</Link>
            <IoIosArrowBack />
          </li>
          <li>
            <Link href="/introductions">المقدمات</Link>
          </li>
        </ul>
      </div>
      <div className={styles.slider3d}>
        <button className={styles.arrow + " " + styles.left} onClick={goLeft}>
          &#8592;
        </button>
        <div className={styles.cylinder} style={{ perspective: "2000px" }}>
          {images.map((src, i) => {
            // Calculate relative position to active
            let pos = i - active;
            if (pos < -half) pos += total;
            if (pos > half) pos -= total;
            // Only show slides within the visible arc
            if (Math.abs(pos) > half) return null;
            // Calculate angle for this slide
            const angle = (pos * ARC_DEGREES) / (VISIBLE_COUNT - 1);
            const opacity = 1 - Math.abs(pos) / (half + 1);
            return (
              <div
                key={i}
                className={styles.slide}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${-RADIUS}px)`,
                  opacity,
                  zIndex: 10 - Math.abs(pos),
                  pointerEvents: Math.abs(pos) > half ? "none" : "auto",
                }}
              >
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className={styles.image}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
        <button className={styles.arrow + " " + styles.right} onClick={goRight}>
          &#8594;
        </button>
      </div>
    </div>
  );
}
