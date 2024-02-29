import { GetStaticPaths, GetStaticProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import classNames from 'classnames/bind';
import { allPosts } from '@/contentlayer/generated';
import formatDate from '@/utils/formatDate';
import { SVGS } from '@/constants/importImage';
import styles from './PostDetailPage.module.scss';
import Comment from '@/components/common/Comment';

const cx = classNames.bind(styles);

const PostDetailPage = ({ post }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post?.body.code || '');
  const createdDate = post?.createdAt;
  const convertedDate = formatDate(createdDate);

  return (
    <article className={cx('container')}>
      <header className={cx('container-header')}>
        <span className={cx('container-header-title')}>{post?.title}</span>
        <div className={cx('container-header-info')}>
          <span className={cx('container-header-info-mins')}>
            {post?.minsToRead} mins to read
          </span>
          <span className={cx('container-header-info-createdAt')}>{convertedDate}</span>
        </div>
      </header>
      <div className={cx('container-paragraph')}>
        <MDXComponent />
      </div>
      {/* <button className={cx('container-sharebutton-wrapper')}>
        <span className={cx('container-sharebutton-wrapper-text')}>Share this post</span>
        <div className={cx('container-sharebutton-wrapper-img')}>
          <Image
            className={cx('container-sharebutton-wrapper-img-svg')}
            src={SVGS.iconShare.url}
            alt={SVGS.iconShare.alt}
            fill
            sizes='100%'
          />
        </div>
      </button> */}
      <footer className={cx('container-footer')}>
        {post?.categories.map((category: string, i: number) => (
          <span key={`${category}-${i}`} className={cx('container-footer-category')}>
            {category}
          </span>
        ))}
      </footer>
      <Comment />
    </article>
  );
};

export default PostDetailPage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allPosts.map(({ _raw }) => ({
    params: {
      id: _raw.flattenedPath,
    },
  })),

  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = String(params?.id || '');

  const post = allPosts.find(({ _raw }) => _raw.flattenedPath === postId);

  return {
    props: {
      post,
    },
  };
};
