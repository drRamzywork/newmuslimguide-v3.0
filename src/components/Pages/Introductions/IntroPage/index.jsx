import Image from "next/image";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import style from "./index.module.scss";
const IntroPage = () => {
  return (
    <>
      <section id="IntroPage" className={style.section}>
        <div className={"sec_bg"}>
          <Image
            src="/assets/imgs/sections_bg.jpg"
            alt=""
            width={2804}
            height={2113}
          />
        </div>

        <div className={style.main_container}>
          <div className="container">
            <div className={style.sec_container}>
              <div className={style.text_container}>
                <div className={"main_title page2"}>
                  <h2>الغاية من وجودنا</h2>
                </div>

                <div className={"desc page"}>
                  <p>
                    يحتار كثير من المفكرين والبسطاء على حد سواء في إجابة السؤال
                    الأهم في حياتنا: <br />
                    لماذا نحن موجودون ؟<br />
                    ما الهدف من حياتنا ؟<br />
                    وقد حدد القرآن الغاية والهدف من وجود الإنسان في هذه الحياة
                    بكل وضوح ودقة في قول الله تعالى: (وَمَا خَلَقْتُ الْجِنَّ
                    وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ) (الذاريات: 56)  فالعبادة
                    هي الغاية من وجودنا في هذه الأرض وما سواها وسائل وتوابع
                    ومكملات. ولكن العبادة في المفهوم الإسلامي ليست رهبنة
                    وانقطاعاً عن الحياة وملذاتها ومتعها، بل هي تشمل مع الصلاة
                    والصوم والزكاة كلَّ أفعال الإنسان وأقواله واختراعاته
                    وعلاقاته، بل وحتى لعبه واستمتاعه، متى ما صاحب ذلك النية
                    الصالحة والقصد الحسن، ولهذا قال النبي صلى الله عليه وسلم:
                    "في بضع أحدكم صدقة " (مسلم: 1006) يعني بذلك أن الأجر والثواب
                    ينال المسلم حتى باستمتاعه بزوجته.
                    <br />
                    وبذلك تصير العبادة مع كونها هدف الحياة: حقيقة الحياة،
                    فالمسلم يتقلب بين أنواع من العبادات، كما قال الله
                    تعالى: (قُلْ إِنَّ صَلاَتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي
                    لِلهِ رَبِّ الْعَالَمِينَ) (الأنعام: 162).{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroPage;
