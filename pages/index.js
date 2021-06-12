import Layout from '@components/Layout';
import HomeNews from '@components/HomeNews';
import { API_URL } from '@config/index';
import styles from '@styles/Home.module.css';

export default function Home({ news }) {
  return (
    <Layout>
      <div className={styles.newsContainer}>
        {news.map(nw => (
          <HomeNews nw={nw} key={nw.id} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api`);
  const news = await res.json();

  return {
    props: { news },
  };
}
