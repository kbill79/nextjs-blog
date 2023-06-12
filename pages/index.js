// pages/home.js

import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

const HomeController = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <HomeView allPostsData={allPostsData} />
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const HomeView = ({ allPostsData }) => {
  return (
    <section className={utilStyles.headingMd}>
      <p>[Your Self Introduction]</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
      <BlogSection allPostsData={allPostsData} />
    </section>
  );
};

const BlogSection = ({ allPostsData }) => {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <BlogListItem key={id} id={id} date={date} title={title} />
        ))}
      </ul>
    </section>
  );
};

const BlogListItem = ({ id, date, title }) => {
  return (
    <li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}>{title}</Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>
  );
};

export default HomeController;