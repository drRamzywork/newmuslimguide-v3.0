import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
const Sections4 = () => {
  return (
    <section id="sections4" className={style.sections4}>
      <div className="container">
        <div className={style.boxes_container}>
          <div className={style.box_container}>
            <div className={style.box}>
              <div className={style.img_container}>
                <Image
                  alt=""
                  src={"/assets/imgs/sec-4-1.png"}
                  width={267}
                  height={268}
                />
              </div>
              <div className={style.title}>
                <h3>طعام المسلم</h3>
              </div>

              <div className={style.desc}>
                <p>
                  {`للطعام الحلال مكانة كبيرة في الإسلام فهو سبب لإجابة الدعاء والبركة في المال والأهل. ويراد بالطعام الحلال ما كان طعاماً ......`}
                </p>
              </div>
            </div>

            <button className={"read_more sec"}>
              <p>المزيد</p>
              <FaArrowLeftLong />
            </button>
          </div>
          <div className={style.box_container}>
            <div className={style.box}>
              <div className={style.img_container}>
                <Image
                  alt=""
                  src={"/assets/imgs/sec-4-2.png"}
                  width={267}
                  height={268}
                />
              </div>
              <div className={style.title}>
                <h3>المعاملات المالية </h3>
              </div>

              <div className={style.desc}>
                <p>
                  {`وضع الإسلام جميع الأحكام والتشريعات التي تراعي الإنسان وتحفظ حقوقه المالية والمهنية سواء كان غنياً أو فقيراً......`}
                </p>
              </div>
            </div>

            <button className={"read_more sec"}>
              <p>المزيد</p>
              <FaArrowLeftLong />
            </button>
          </div>
          <div className={style.box_container}>
            <div className={style.box}>
              <div className={style.img_container}>
                <Image
                  alt=""
                  src={"/assets/imgs/sec-4-3.png"}
                  width={267}
                  height={268}
                />
              </div>
              <div className={style.title}>
                <h3>لباس المسلم</h3>
              </div>

              <div className={style.desc}>
                <p>
                  {`اللباس نعمة من نعم الله على الناس، كما قال الله تعالى: {يَا بَنِي آدَمَ قَدْ أَنزَلْنَا عَلَيْكُمْ لِبَاسًا يُوَارِي سَوْءَاتِكُمْ وَرِيشًا  ......`}
                </p>
              </div>
            </div>

            <button className={"read_more sec"}>
              <p>المزيد</p>
              <FaArrowLeftLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections4;
