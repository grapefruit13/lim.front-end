import { GetStaticProps } from 'next';
import Head from 'next/head';
import Profile from '@/components/common/Profile';
import { allPosts } from '@/contentlayer/generated';
import PostCard from '@/components/common/PostCard';

interface PostProps {
  title: string;
  description: string;
  categories: string[];
  thumbnail?: string;
  createdAt: string;
  minsToRead: number;
}

interface MainPageProps {
  posts: PostProps[];
}

const MainPage = ({ posts }: MainPageProps) => (
  <>
    <Head>
      <title>lim.dev</title>
      <meta name='description' content='Welcome to lim dev blog' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/svg/favicon.svg' />
    </Head>
    <Profile />
    <PostCard posts={posts} />
  </>
);

export default MainPage;

export const getStaticProps: GetStaticProps = () => {
  const posts: PostProps[] = allPosts;

  return {
    props: {
      posts,
    },
  };
};
