import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
const Sections3 = () => {
  return (
    <section id="sections3" className={style.sections3}>
      <div className="container">
        <div className={style.boxes_container}>
          <div className={style.box_container}>
            <div className={style.box}>
              <div className={style.text_container}>
                <div style={{ textAlign: "start" }} className={"sec_title"}>
                  <h3>الموت والجنازة </h3>
                </div>
                <div className={"desc"}>
                  <p>
                    {`الموت ليس نهاية الأمر ولكنه مرحلة جديدة للإنسان وبداية للحياة الكاملة في الآخرة وكما حرص الإسلام على رعاية الحقوق منذ الولادة فقد أكد على الأحكام التي تحفظ حقوق الميت وتراعي حال أهله وأقاربه.`}
                  </p>
                </div>

                <button className={"read_more"}>
                  <p>المزيد</p>
                  <FaArrowLeftLong />
                </button>
              </div>
              <div className={style.img_container}>
                <Image
                  alt=""
                  src={"/assets/svgs/test-1.svg"}
                  width={267}
                  height={268}
                />
              </div>
            </div>
          </div>
          <div className={style.box_container}>
            <div className={style.box}>
              <div className={style.img_container}>
                <Image
                  alt=""
                  src={"/assets/svgs/section3-2.svg"}
                  width={267}
                  height={268}
                />
              </div>
              <div className={style.text_container}>
                <div style={{ textAlign: "start" }} className={"sec_title"}>
                  <h3>أخلاق المسلم</h3>
                </div>
                <div className={"desc"}>
                  <p>
                    {`الأخلاق في الإسلام ليست ترفاً ولا تكميلاً، ولكنها جزء راسخ مرتبط بالدين من كل جوانبه، فلِلأخلاق في الإسلام أعظم المراتب وأعلى المنازل. ويظهر ذلك في جميع أحكام الإسلام وتشريعاته، وقد بُعث النبي صلى الله عليه وسلم ليتمم مكارم الأخلاق.
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
      </div>

      <div className={style.dots}>
        <Image
          src="/assets/imgs/section3-bg.png"
          alt=""
          width={371}
          height={172}
        />
      </div>
    </section>
  );
};

export default Sections3;
