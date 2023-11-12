"use client";
import Link from "next/link";
import style from "./_header.module.scss";
import { LiaAngleDownSolid, LiaShoppingCartSolid, LiaAngleUpSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Mobile from "./mobiles/Mobile";

const Header = () => {
  const router = usePathname();
  const [active, setactive] = useState(false);
  const [drop, setDrop] = useState(false);
  const handleclick = () => {
    setDrop(!drop);
  }
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.flex}>
          <div className={style.flexfirst}>
            <div className={style.logo}>
              <Link href="/">
                <h4>
                  Home<span>Q</span>
                </h4>
              </Link>
            </div>
            <nav className={style.menu}>
              <ul className={style.menulist}>
                <li>
                  <Link
                    href="/"
                    className={`${
                      router === "/" ? style.active : style.noactive
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${
                      router === "#" ? style.active : style.noactive
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${
                      router === "#" ? style.active : style.noactive
                    }`}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${
                      router === "#" ? style.active : style.noactive
                    }`}
                  >
                    News
                  </Link>
                </li>
                <li onClick={handleclick} className={style.dropdownli}>
                  <Link
                    href="#"
                    className={`${
                      router === "#" ? style.active : style.noactive
                    }`}
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
                    className={`${
                      router === "#" ? style.active : style.noactive
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style.flexsecond}>
            <Link href="#" className={style.shoplink}>
              <LiaShoppingCartSolid />
            </Link>
            <Link href="#" className={style.signlink}>Sign in</Link>
            <Link href="#" className={style.registerlink}>Register</Link>
            <div className={style.mobilebtn} onClick={() => setactive(!active)}>
              <button  className={`${active ? style.close : style.open}`}>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <Mobile active={active}/>
      </div>
    </header>
  );
};
export default Header;
