import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
const Sections2 = () => {
  return (
    <section id="sections2" className={style.sections2}>
      <div className="container">
        <div className={style.boxes_container}>
          <div className={style.box_container}>
            <div className={style.box}>
              <div className={style.img_container}>
                <Image
                  alt=""
                  src={"/assets/imgs/bg-sec-2.jpg"}
                  width={267}
                  height={268}
                />
              </div>
              <div className={style.title}>
                <h3>صيام المسلم</h3>
              </div>

              <div className={style.desc}>
                <p>
                  {`فرض الله على المسلمين الصيام شهراً واحداً في السنة، هو شهر رمضان المبارك، وجعله الركن الرابع من أركان الإسلام ومبانيه العظام، قال الله تعالى: {يََا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُون} (البقرة: 183).

`}
                </p>
              </div>
            </div>

            <button className={"read_more"}>
              <p>المزيد</p>
              <FaArrowLeftLong />
            </button>
          </div>
          <div className={style.box_container}>
            <div className={style.box}>
              <div className={style.img_container}>
                <Image
                  alt=""
                  src={"/assets/imgs/bg-sec-2.jpg"}
                  width={267}
                  height={268}
                />
              </div>
              <div className={style.title}>
                <h3>صيام المسلم</h3>
              </div>

              <div className={style.desc}>
                <p>
                  {`فرض الله على المسلمين الصيام شهراً واحداً في السنة، هو شهر رمضان المبارك، وجعله الركن الرابع من أركان الإسلام ومبانيه العظام، قال الله تعالى: {يََا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُون} (البقرة: 183).

`}
                </p>
              </div>
            </div>

            <button className={"read_more"}>
              <p>المزيد</p>
              <FaArrowLeftLong />
            </button>
          </div>
          <div className={style.box_container}>
            <div className={style.box}>
              <div className={style.img_container}>
                <Image
                  alt=""
                  src={"/assets/imgs/bg-sec-2.jpg"}
                  width={267}
                  height={268}
                />
              </div>
              <div className={style.title}>
                <h3>صيام المسلم</h3>
              </div>

              <div className={style.desc}>
                <p>
                  {`فرض الله على المسلمين الصيام شهراً واحداً في السنة، هو شهر رمضان المبارك، وجعله الركن الرابع من أركان الإسلام ومبانيه العظام، قال الله تعالى: {يََا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُون} (البقرة: 183).

`}
                </p>
              </div>
            </div>

            <button className={"read_more"}>
              <p>المزيد</p>
              <FaArrowLeftLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections2;
