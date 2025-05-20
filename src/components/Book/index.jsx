import Image from "next/image";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from "./index.module.scss";
const Book = () => {
  return (
    <>
      <div className={styles.book}>
        <div className="container">
          <div className={styles.empty_book}>
            <Image
              className={styles.empy}
              alt=""
              src={"/assets/imgs/empty_book.png"}
              width={857}
              height={664}
            />

            <div className={styles.sec_container}>
              <div className={styles.text_container}>
                <h3> كلمة الموقع</h3>
                <div className={styles.desc}>
                  <p>
                    أعظمُ مقاماتِ الإنسانِ عبوديتهُ لله وطاعتهُ لأوامره، فيها
                    صلاح الدنيا والآخرة، فالدين يُسرٌ كله، وخيرٌ كله، وصلاحٌ
                    كله.أعظمُ مقاماتِ الإنسانِ عبوديتهُ لله وطاعتهُ لأوامره،
                    فيها صلاح الدنيا والآخرة، فالدين يُسرٌ كله، وخيرٌ كله،
                    وصلاحٌ كله. وهذه العبودية التي تشمل جميع جوانب الحياة، يجب
                    أن تكون على علمٍ وبصيرة، ليكتمل بها الأجر وينجو بها من الزلل
                    والزيغ......
                  </p>
                </div>

                <div className={styles.more}>
                  <p>المزيد</p>
                  <FaArrowLeftLong />
                </div>
              </div>

              <div className={styles.img_container}>
                <Image
                  alt=""
                  src={"/assets/imgs/main_book.png"}
                  width={373}
                  height={536}
                />
                <button className={"download_btn"}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
