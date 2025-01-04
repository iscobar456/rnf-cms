import Link from 'next/link'
import styles from './components.module.css'

export function DonateButton() {
  return (
    <Link href="/donate" className={styles.donateButton}>
      Donate
    </Link>
  )
}
