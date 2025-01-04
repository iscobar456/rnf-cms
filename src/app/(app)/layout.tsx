import type { Metadata } from 'next'
import { Open_Sans, Oswald } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import styles from './layout.module.css'
import { DonateButton } from './components'

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
})

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rwanda Nurture Foundation',
  description:
    'The Rwanda Nurture Foundation focuses on community needs by helping single mothers learn skills that enhance family well-being',
}

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/" className={styles.navLogo}>
          <Image src="/img/rnf_logo_3.png" fill alt="Rwanda Nurture Foundation logo" />
        </Link>
        <h1>Rwanda Nurture Foundation</h1>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="/posts/">News</Link>
        </li>
        <li>
          <DonateButton />
        </li>
      </ul>
    </nav>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${oswald.variable}`}>
        <Navbar />
        {children}
        <footer className={styles.footer}>
          <div>
            <div className={styles.brand}>
              <div className={styles.footerLogo}>
                <Image src="/img/rnf_logo_3.png" fill alt="Rwanda Nurture Foundation logo" />
              </div>
              <h3>Rwanda Nurture Foundation</h3>
            </div>
            <hr />
            <ul>
              <li>Address: </li>
              <li>Email: contact@rwandanurture.org</li>
            </ul>
            <p>&copy; 2025 Rwanda Nurture Foundation. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
