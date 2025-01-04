import styles from './components.module.css'
import Image from 'next/image'
import { Post, Media, PostCategory } from '@/payload-types'
import Link from 'next/link'

export interface DeepPost extends Omit<Post, 'category' | 'featuredImage'> {
  category: PostCategory
  featuredImage: Media
}

interface PostCardProps {
  post: DeepPost
}

interface PostListProps {
  posts: DeepPost[]
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <Link href={`/posts/${post.urlSlug}`} className={styles.postCardImage}>
        <Image src={post.featuredImage.url ?? ''} alt={post.featuredImage.alt} fill />
      </Link>
      <div className={styles.postCardInfo}>
        <p>{post.category.name}</p>
        <Link href={`/posts/${post.urlSlug}`}>
          <h3>{post.title}</h3>
        </Link>
      </div>
    </div>
  )
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.postList}>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  )
}
