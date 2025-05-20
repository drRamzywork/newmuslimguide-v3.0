import Image from "next/image";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import style from "./index.module.scss";
const Sections5 = () => {
  return (
    <>
      <section id="section5" className={style.section5}>
        <div className={style.main_container2}>
          <div className="container">
            <div className={style.sec_container}>
              <div className={style.text_container}>
                <div className={"sec_title"}>
                  <h3>الأسرة المسلمة </h3>
                </div>

                <div className={"desc"}>
                  <p>
                    {`
                    حرص الإسلام كل الحرص على إرساء وتثبيت الأسرة، والمحافظة عليها مما يؤذيها ويهدد بنيانها، لأنه بصلاح الأسرة واجتماعها نضمن صلاح الأفراد والمجتمع بشكل عام.

                    `}
                  </p>
                </div>

                <button className={"read_more"}>
                  <p>المزيد</p>
                  <FaArrowLeftLong />
                </button>
              </div>
              <div className={style.image_container}>
                <div className={style.main_image}>
                  <Image
                    src="/assets/imgs/section-5-1.png"
                    alt=""
                    width={656}
                    height={683}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.main_container3}>
          <div className="container">
            <div className={style.sec_container}>
              <div className={style.image_container}>
                <div className={style.main_image}>
                  <Image
                    src="/assets/imgs/section-5-2.png"
                    alt=""
                    width={801}
                    height={801}
                  />
                </div>

                <div className={style.bg}>
                  <Image
                    src="/assets/svgs/section3-bg.svg"
                    alt=""
                    width={990}
                    height={709}
                  />
                </div>
              </div>
              <div className={style.text_container}>
                <div className={"sec_title"}>
                  <h3>الأدعية والأذكار</h3>
                </div>

                <div className={"desc"}>
                  <p>
                    ذكر الله أحد أعظم العبادات أجراً وأنفعها للعبد في الدنيا
                    والآخرة ويزداد بها المسلم شرفاً وقرباً من خالقه الكريم.
                  </p>
                </div>

                <button className={"read_more"}>
                  <p>المزيد</p>
                  <FaArrowLeftLong />
                </button>
              </div>
            </div>
          </div>

          <div className={style.dots}>
            <Image
              src="/assets/imgs/section3-bg.png"
              alt=""
              width={411}
              height={817}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections5;
