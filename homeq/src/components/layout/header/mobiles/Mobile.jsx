"use client";
import style from "./_mobile.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

const Mobile = ({ active }) => {
  const router = usePathname();
  const [drop, setDrop] = useState(false);
  const handleClick = () => {
    setDrop(!drop);
  }

  return (
    <div className={style.mobilemenu}>
      <div className={`${active ? style.mobileclose : style.mobileopen}`}>
        <ul className={style.mobilemenulist}>
          <li>
            <Link
              href="/"
              className={`${router === "/" ? style.active : style.noactive}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`${router === "#" ? style.active : style.noactive}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`${router === "#" ? style.active : style.noactive}`}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`${router === "#" ? style.active : style.noactive}`}
            >
              News
            </Link>
          </li>
          <li onClick={handleClick} className={style.dropdownli}>
            <Link
              href="#"
              className={`${router === "#" ? style.active : style.noactive}`}
            >
              Pages {drop ? <LiaAngleUpSolid/> : <LiaAngleDownSolid/>}
            </Link>
            <ul className={`${drop ? style.dorpup : style.dropdown}`}>
                    <li>
                      <Link href="#">Portofolio</Link>
                    </li>
                    <li>
                      <Link href="#">Our Agent</Link>
                    </li>
                    <li>
                      <Link href="#">Our Service</Link>
                    </li>
                    <li>
                      <Link href="#">Wishlist</Link>
                    </li>
                    <li>
                      <Link href="#">Location</Link>
                    </li>
                    <li>
                      <Link href="#">FAQ</Link>
                    </li>
                  </ul>
          </li>
          <li>
            <Link
              href="#"
              className={`${router === "#" ? style.active : style.noactive}`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className={style.flexsecond}>
          <Link href="#" className={style.signlink}>
            Sign in
          </Link>
          <Link href="#" className={style.registerlink}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
