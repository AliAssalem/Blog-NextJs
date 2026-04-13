import Link from 'next/link'
import { GrArticle } from 'react-icons/gr'
import styles from "./header.module.css"

const Navbar = () => {
  return (
      <nav  className={styles.navbar}>
        <div>
          <Link className={styles.logo} href='/'> <GrArticle /> Blog</Link>
        </div>

        <ul className={styles.navLinks}>
          <Link className={styles.navLink} href='/'>Home</Link>
          <Link className={styles.navLink} href='/articles'>Articles</Link>
          <Link className={styles.navLink} href='/about'>About</Link>
          <Link className={styles.navLink} href='/admin'>Admin Dashboard </Link>
        </ul>
      </nav>
  ) 
}

export default Navbar
