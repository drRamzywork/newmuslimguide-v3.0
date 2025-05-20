import Image from "next/image";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import style from "./index.module.scss";
const Sections = () => {
  return (
    <>
      <section id="section" className={style.section}>
        <div className={"sec_bg"}>
          <Image
            src="/assets/imgs/sections_bg.jpg"
            alt=""
            width={2804}
            height={2113}
          />
        </div>

        <div className={style.line}>
          <Image
            src="/assets/svgs/line.svg"
            alt=""
            width={1236}
            height={1500}
          />
        </div>
        <div className={style.main_container}>
          <div className="container">
            <div className={style.sec_container}>
              <div className={style.text_container}>
                <div className={"main_title"}>
                  <h2>اقسام الكتاب</h2>
                </div>

                <div className={"sec_title"}>
                  <h3>ايمان المسلم</h3>
                </div>

                <div className={"desc"}>
                  <p>
                    اتفقت جميع رسالات الأنبياء لأقوامهم على عبادة الله وحده لا
                    شريك له والكفر بما يعبد من دون الله وهذا هو حقيقة معنى لا
                    إله إلا الله محمد رسول الله، وهي الكلمة التي يدخل بها المرء
                    في دين الله.
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
                    src="/assets/imgs/section-1.png"
                    alt=""
                    width={801}
                    height={801}
                  />
                </div>

                <div className={style.bg}>
                  <Image
                    src="/assets/imgs/sections-bg-2.png"
                    alt=""
                    width={990}
                    height={709}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={style.dots}>
            <Image
              src="/assets/imgs/dots.png"
              alt=""
              width={371}
              height={172}
            />
          </div>
        </div>

        <div className={style.main_container2}>
          <div className="container">
            <div className={style.sec_container}>
              <div className={style.image_container}>
                <div className={style.main_image}>
                  <Image
                    src="/assets/imgs/section-2.png"
                    alt=""
                    width={656}
                    height={683}
                  />
                </div>
              </div>
              <div className={style.text_container}>
                <div className={"sec_title"}>
                  <h3>طهارة المسلم</h3>
                </div>

                <div className={"desc"}>
                  <p>
                    {`أمر الله المسلم بتطهير باطنه وقلبه من الشرك وأمراض القلوب كالحسد والكبر والحقد، وتطهير ظاهره من النجاسات والقاذورات، فإذا فعل ذلك استحق محبة الله كما قال تعالى: {إِنَّ اللهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِين} (البقرة: 222)..
`}
                  </p>
                </div>

                <button className={"read_more"}>
                  <p>المزيد</p>
                  <FaArrowLeftLong />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={style.main_container3}>
          <div className="container">
            <div className={style.sec_container}>
              <div className={style.text_container}>
                <div className={"sec_title"}>
                  <h3>صلاة المسلم</h3>
                </div>

                <div className={"desc"}>
                  <p>
                    الصلاة هي عمود الدين وصلة العبد بربه ومولاه، ولذلك كانت أعظم
                    العبادات وأجلها شأنًا، وقد أمر الله المسلم بالمحافظة عليها
                    في كل أحواله في الحضر والسفر والصحة والمرض.
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
                    src="/assets/imgs/main-sec-3.png"
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

export default Sections;
