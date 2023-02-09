import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav () {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
      @media (max-width: 767px) {
         body {
            overflow: hidden;
            position: flexed;
            width: 100%;
          }
        }
      `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>

        <span className={styles.bar} />
        <span className='sr-only'>MENU</span>
      </button>

      <ul className={styles.list}>
        <li>
          <Link href='/' legacyBehavior>
            <a onClick={closeNav}>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about' legacyBehavior>
            <a onClick={closeNav}>About</a>
          </Link>
        </li>
        <li>
          <Link href='/blog' legacyBehavior>
            <a onClick={closeNav}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
