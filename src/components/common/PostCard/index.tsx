import { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { getStaticProps } from '@/pages';
import formatDate from '@/utils/formatDate';
import styles from './PostCard.module.scss';
import Thumbnail from '../Thumbnail';

const cx = classNames.bind(styles);

interface PostProps {
  title: string;
  description: string;
  categories: string[];
  thumbnail: string;
  createdAt: Date;
  minsToRead: number;
  _raw: {
    flattenedPath: string;
  };
  url: string;
}

const PostCard = ({ posts }: InferGetServerSidePropsType<typeof getStaticProps>) => (
  <>
    {posts?.map((post: PostProps, i: number) => (
      <Link className={cx('container')} key={`${post}-${i}`} href={post.url}>
        <article className={cx('container-left')}>
          <span className={cx('container-left-createdAt')}>
            {formatDate(post?.createdAt)}
          </span>
          <div className={cx('container-left-thumbnail-wrapper')}>
            {post?.thumbnail ? (
              <Image
                className={cx('container-left-thumbnail-wrapper-img')}
                src={post?.thumbnail}
                alt='post thumbnail'
                fill
                sizes='100%'
              />
            ) : (
              <Thumbnail title={post?.title} />
            )}
          </div>
        </article>

        <div className={cx('container-right')}>
          <span className={cx('container-right-title')}>{post.title}</span>
          <span className={cx('container-right-description')}>{post.description}</span>
          <div className={cx('container-right-category-container')}>
            {post?.categories.map((category: string, i: number) => (
              <span
                key={`${category}-${i}`}
                className={cx('container-right-category-container-category')}
              >
                #{category}
              </span>
            ))}
          </div>
        </div>
      </Link>
    ))}
  </>
);
export default PostCard;
