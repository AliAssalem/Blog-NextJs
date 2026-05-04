import Link from 'next/link'
import styles from "./header.module.css"
import Navbar from './Navbar';
import { verifyTokenForPage } from '@/app/utils/verifyToken';
import LogoutButton from '../LogoutButton';
import { cookies } from 'next/headers';


const Header = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwtToken")?.value || "";
  
  const payload = verifyTokenForPage(token);

  return (
    <header className={styles.header}>
      <Navbar isAdmin={payload?.isAdmin || false} />
      <div className={styles.right}>
        {payload ? (
          <>
            <Link href="/profile" className='text-blue-800 font-bold md:text-xl capitalize  mx-2'>
              {payload?.username}
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link className={styles.btn} href="/login">Login</Link>
            <Link className={styles.btn} href="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  )
}


export default Header
//npx next dev