import Image from 'next/image'
import styles from './page.module.css'
import { DonateButton } from './components'
import { getPayload } from 'payload'
import config from '@payload-config'
import { PostList, DeepPost } from './posts/components'

export async function fetchPosts() {
  const payload = await getPayload({ config })
  const posts = await payload.find({
    collection: 'posts',
    limit: 4,
    sort: '-datePublished',
    depth: 2,
  })
  return posts.docs as DeepPost[]
}

export default async function Home() {
  const posts = await fetchPosts()
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          src="/img/header-background.jpg"
          alt="Header Background"
          fill
          className={styles.headerImage}
        />
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
            <Image
              src="/img/about-us.jpeg"
              alt="About Us"
              height="300"
              width="300"
              objectFit="cover"
            />
          </div>
          <div className={styles.aboutContent}>
            <p>
              The Rwanda Nurture Foundation was officially launched on November 4, 2024, with a
              mission to provide early childhood education and skills training for single mothers.
              The foundation aims to foster both the intellectual and socio-economic development of
              young children and empower single mothers by equipping them with practical skills,
              such as sewing, to improve their livelihoods. With a strong focus on community needs,
              the foundation targets single mothers eager to learn and gain skills that will enhance
              their families&apos; well-being.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.donateSection}>
        <p>
          Your donations make our work possible.<br></br>
          Every contribution goes towards early childhood educational expenses<br></br>
          or professional development opportunities for single mothers.
        </p>
        <DonateButton />
      </section>
    </div>
  )
}
