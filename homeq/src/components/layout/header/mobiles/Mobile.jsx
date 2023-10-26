'use client';
import style from './_mobile.module.scss';
import Link from 'next/link';

const Mobile = () => {
    return(
        <div>
            <ul className={style.menulist}>
                <li>
                  <Link
                    href="/"
                   
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    
                  >
                    Pages <LiaAngleDownSolid />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    
                  >
                    Contact
                  </Link>
                </li>
              </ul>
        </div>
    )
}

export default Mobile