import Image from 'next/image'
import headerImage from '../../public/img/header-background.jpg'
import aboutUsImage from '../../public/img/about-us.jpeg'
import Link from 'next/link'
import styles from './page.module.css'
import { PostList, DeepPost } from './posts/components'
import RootLayout from './layout'

export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const req = await fetch(`${baseUrl}/api/posts?depth=2`)
  const data = await req.json()
  const posts = data.docs as DeepPost[]

  return {
    props: {
      posts: posts.slice(0, 4),
    },
  }
}

export default function Home({ posts }: { posts: DeepPost[] }) {
  return (
    <RootLayout>
      <div className={styles.page}>
        <header className={styles.header}>
          <Image src={headerImage} alt="Header Background" fill className={styles.headerImage} />
          <p>
            Focused on community needs, the Rwanda Nurture Foundation helps single mothers learn
            skills that enhance family well-being.
          </p>
        </header>
        <section className={styles.postsSection}>
          <h2>See What We&apos;ve Been Doing</h2>
          <PostList posts={posts} />
        </section>
        <section id="about" className={styles.aboutSection}>
          <div className="layout">
            <h2 className={styles.aboutHeader}>About Us</h2>
            <div className={styles.aboutImage}>
              <Image src={aboutUsImage} alt="About Us" height="300" width="300" />
            </div>
            <div className={styles.aboutContent}>
              <p>
                The Rwanda Nurture Foundation was officially launched on November 4, 2024, with a
                mission to provide early childhood education and skills training for single mothers.
                The foundation aims to foster both the intellectual and socio-economic development
                of young children and empower single mothers by equipping them with practical
                skills, such as sewing, to improve their livelihoods. With a strong focus on
                community needs, the foundation targets single mothers eager to learn and gain
                skills that will enhance their families&apos; well-being.
              </p>
            </div>
          </div>
        </section>
        <section id="donate" className={styles.donateSection}>
          <p>
            Your donations make our work possible.<br></br>
            Every contribution goes towards early childhood educational expenses<br></br>
            or professional development opportunities for single mothers.
          </p>
          <Link href="" className={styles.donateButton}>
            Donate on PayPal
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
              />
            </svg>
          </Link>
          <Link href="" className={styles.donateButton}>
            Donate on GoFundMe
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
              />
            </svg>
          </Link>
        </section>
      </div>
    </RootLayout>
  )
}
