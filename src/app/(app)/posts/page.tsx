import { getPayload } from 'payload'
import config from '@payload-config'
import { DeepPost, PostList } from './components'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function fetchPosts() {
  const payload = await getPayload({ config })
  const posts = await payload.find({
    collection: 'posts',
    sort: 'datePublished',
    depth: 2,
  })
  return posts.docs as DeepPost[]
}

function FeaturedSection({ post }: { post: DeepPost }) {
  return (
    <div className={styles.featuredSection}>
      <Link href={`/posts/${post.urlSlug}`} className={styles.featuredImage}>
        <Image src={post.featuredImage.url ?? ''} alt={post.featuredImage.alt} fill />
      </Link>
      <div className={styles.featuredInfo}>
        {/* <p className={styles.featuredLabel}>Featured</p> */}
        <Link href={`/posts/${post.urlSlug}`}>
          <h1 className={styles.featuredTitle}>{post.title}</h1>
        </Link>
        <p className={styles.featuredExcerpt}>{post.excerpt}</p>
      </div>
    </div>
  )
}

export default async function PostIndex() {
  let posts = await fetchPosts()
  const featuredPost = posts[0]
  posts = posts.slice(1)

  return (
    <div className={styles.postIndex}>
      <FeaturedSection post={featuredPost} />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}
