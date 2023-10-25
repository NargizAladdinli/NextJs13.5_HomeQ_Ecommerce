"use client";
import Link from "next/link";
import style from "./_header.module.scss";
import { LiaAngleDownSolid, LiaShoppingCartSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = usePathname();
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
                <li>
                  <Link
                    href="#"
                    className={`${
                      router === "#" ? style.active : style.noactive
                    }`}
                  >
                    Pages <LiaAngleDownSolid />
                  </Link>
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
            <div className={style.mobilebtn}>
              <button>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
