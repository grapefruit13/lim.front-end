import { GetStaticPaths, GetStaticProps, InferGetServerSidePropsType } from 'next';
import classNames from 'classnames/bind';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '@/contentlayer/generated';
import formatDate from '@/utils/formatDate';
import styles from './PostDetail.module.scss';

const cx = classNames.bind(styles);

const PostDetailPage = ({ post }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post?.body.code || '');
  const creatdDate = post?.createdAt;
  const convertedDate = formatDate(creatdDate);

  return (
    <article className={cx('container')}>
      <header className={cx('container-header')}>
        <span className={cx('container-header-title')}>{post?.title}</span>
        <div className={cx('container-header-info')}>
          <span className={cx('container-header-info-mins')}>
            {post?.minsToRead}mins to read
          </span>
          <span className={cx('container-header-info-createdAt')}>{convertedDate}</span>
        </div>
      </header>
      <div className={cx('container-paragraph')}>
        <MDXComponent />
      </div>
      <footer className={cx('container-footer')}>
        <span className={cx('container-footer-category')}>{post?.category}</span>
        <span className={cx('container-footer-category')}>{post?.category2}</span>
        <span className={cx('container-footer-category')}>{post?.category3}</span>
      </footer>
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
