import Image from "next/image";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import styles from "./index.module.scss";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav id={styles.nav}>
        <div className="container">
          <div className={styles.sec_container}>
            <div className={styles.logo}>
              <Image alt="logo" src={"/logo.png"} width={255} height={38.38} />
            </div>

            <div className={styles.links_container}>
              <ul>
                <li>
                  <a href="">الرئيسية</a>
                </li>
                <li>
                  <a href="">المقدمات</a>
                </li>
                <li>
                  <button>الاقسام</button>
                  <ul className={styles.menu_container}>
                    <li>
                      <Link href="/">قسم 1</Link>
                    </li>
                    <li>
                      <Link href="/">قسم 2</Link>
                    </li>
                    <li>
                      <Link href="/">قسم 3</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className={styles.langs}>
              <button className="header_container">
                <RiArrowDownSLine />

                <Image
                  src={"/assets/svgs/flag.svg"}
                  alt=""
                  width={48}
                  height={32}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
