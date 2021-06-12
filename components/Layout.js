import Head from 'next/head';

import styles from '@styles/Layout.module.css';
import Header from '@components/Header';

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Hacker News',
};
