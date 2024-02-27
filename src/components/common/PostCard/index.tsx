import { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { getStaticProps } from '@/pages';
import formatDate from '@/utils/formatDate';
import styles from './PostCard.module.scss';

const cx = classNames.bind(styles);

interface PostProps {
  title: string;
  description: string;
  categories: string[];
  thumbnail: string;
  createdAt: string;
  minsToRead: number;
  _raw: {
    flattenedPath: string;
  };
}

const PostCard = ({ posts }: InferGetServerSidePropsType<typeof getStaticProps>) => (
  <>
    {posts?.map((post: PostProps, i: number) => (
      <article key={`${post}-${i}`} className={cx('container')}>
        <Link href={`/posts/${post._raw.flattenedPath}`}>
          <div className={cx('container-post')}>
            <span className={cx('container-post-title')}>{post.title}</span>
            <span className={cx('container-post-description')}>{post.description}</span>
            <div className={cx('container-post-category-container')}>
              {post?.categories.map((category: string, i: number) => (
                <span
                  key={`${category}-${i}`}
                  className={cx('container-post-category-container-category')}
                >
                  #{category}
                </span>
              ))}
            </div>
            <span className={cx('container-post-createdAt')}>
              {formatDate(post?.createdAt)}
            </span>
          </div>
          <div className={cx('container-thumnail-wrapper')}>썸네일</div>
        </Link>
      </article>
    ))}
  </>
);
export default PostCard;
