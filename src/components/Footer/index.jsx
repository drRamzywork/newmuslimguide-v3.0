import Image from "next/image";
import React from "react";
import style from "./index.module.scss";
const Footer = () => {
  return (
    <>
      <footer id="footer" className={style.footer}>
        <div className={"sec_bg"}>
          <Image
            src="/assets/imgs/sections_bg.jpg"
            alt=""
            width={2804}
            height={2113}
          />
        </div>
        <div className="container">
          <div className={style.sec_container}>
            <div className={style.box}>
              <div className="logo">
                <Image
                  src="/assets/imgs/logo_white.png"
                  alt=""
                  width={269}
                  height={40.49}
                />
              </div>

              <div className={style.desc}>
                <p>
                  موقع دليل المسلم الميسر هو نسخة الكترونية من كتاب (دليل المسلم
                  الميسر) وهو أحد مشاريع شركة الدليل المعاصر وتم إنتاجه بأكثر من
                  ١٥ لغة وتم توفير المحتوى في عدد من القوالب الالكترونية
                  المميزة.
                </p>
              </div>
            </div>
            <div className={style.box}>
              <ul>
                <li>
                  <p>من نحن</p>
                </li>
                <li>
                  <p>الرئيسية</p>
                </li>
                <li>
                  <p>الأقسام</p>
                </li>
                <li>
                  <p>المقدمات</p>
                </li>
              </ul>
            </div>

            <div className={style.box}>
              <button className={"download_btn sec"}>
                <p>
                  <strong>تحميل الكتاب</strong>
                  <br />
                  النسخة الأصلية
                </p>

                <Image
                  alt=""
                  src={"/assets/svgs/pdf.svg"}
                  width={61}
                  height={61}
                />
              </button>
            </div>
          </div>

          <div className={style.line} />

          <div className={style.copy_right}>
            <p>جميع الحقوق محفوظة - شركة الدليل المعاصر © 2025</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
