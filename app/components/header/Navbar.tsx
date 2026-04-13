"use client"

import Link from 'next/link'
import { GrArticle } from 'react-icons/gr'
import styles from "./header.module.css"
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
    const [toggle,setToggle] = useState(false);

    return (
      <nav  className={styles.navbar}>
        <div>
          <Link className={styles.logo} href='/'> <GrArticle /> Blog</Link>

          <div className={styles.menu}>
             {toggle ? 
              (<IoIosCloseCircleOutline onClick={() => setToggle(prev=>!prev)}/>)
              : <CiMenuBurger onClick={() => setToggle(prev=>!prev)}/>}
          </div>
        </div>

        <div className={styles.navLinksWrappers} style={{clipPath : toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || ""}}>
            <ul className={styles.navLinks}>   
                <Link className={styles.navLink} href='/'>Home</Link>
                <Link className={styles.navLink} href='/articles'>Articles</Link>
                <Link className={styles.navLink} href='/about'>About</Link>
                <Link className={styles.navLink} href='/admin'>Admin Dashboard </Link>
            </ul>
        </div>
      </nav>
  ) 
}

export default Navbar
