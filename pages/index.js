import Layout from '@components/Layout';
import HomeNews from '@components/HomeNews';
import { API_URL } from '@config/index';
import styles from '@styles/Home.module.css';
import hackerContext from '@context/hackerContext';

import { useContext } from 'react';

export default function Home({ news }) {
  const { searchResults, addSearchResults } = useContext(hackerContext);
  return (
    <Layout>
      <div className={styles.newsContainer}>
        {news.map(nw => (
          <HomeNews nw={nw} key={nw.objectID} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/search_by_date?tags=story`);
  const news = await res.json();

  return {
    props: { news: news.hits },
  };
}
