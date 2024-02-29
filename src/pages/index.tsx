import { GetStaticProps } from 'next';
import Head from 'next/head';
import { compareDesc } from 'date-fns';
import { allPosts } from '@/contentlayer/generated';
import Profile from '@/components/common/Profile';
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
  allPosts: PostProps[];
}

const MainPage = ({ allPosts }: MainPageProps) => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );
  return (
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
};

export default MainPage;

export const getStaticProps: GetStaticProps = () => ({
  props: {
    allPosts,
  },
});
