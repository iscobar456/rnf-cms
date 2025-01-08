import { DeepPost, PostList, PostCardProps } from './components'
import styles from './page.module.css'
import Link from 'next/link'
import { Media } from '@/payload-types'
import RootLayout from '../layout'

interface FeaturedSectionProps {
  title: string
  excerpt: string
  featuredImage: Media
  urlSlug: string
}

function FeaturedSection({ urlSlug, featuredImage, excerpt, title }: FeaturedSectionProps) {
  return (
    <div className={styles.featuredSection}>
      <Link href={`/posts/${urlSlug}`} className={styles.featuredImage}>
        <img src={featuredImage.url ?? ''} alt={featuredImage.alt} />
      </Link>
      <div className={styles.featuredInfo}>
        {/* <p className={styles.featuredLabel}>Featured</p> */}
        <Link href={`/posts/${urlSlug}`}>
          <h1 className={styles.featuredTitle}>{title}</h1>
        </Link>
        <p className={styles.featuredExcerpt}>{excerpt}</p>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const req = await fetch(`${baseUrl}/api/posts?depth=2`)
  const data = await req.json()
  const posts = data.docs as DeepPost[]

  return {
    props: {
      posts: posts.map((post) => ({
        featuredImage: post.featuredImage,
        urlSlug: post.urlSlug,
        title: post.title,
        category: post.category,
        excerpt: post.excerpt,
      })),
    },
  }
}

export default function PostIndex({ posts }: { posts: PostCardProps[] & FeaturedSectionProps[] }) {
  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <RootLayout>
      <div className={styles.postIndex}>
        <FeaturedSection {...featuredPost} />
        <hr />
        <PostList posts={remainingPosts} />
      </div>
    </RootLayout>
  )
}
