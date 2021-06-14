import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import styles from '@styles/Layout.module.css';
import Header from '@components/Header';

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
      />
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Hacker News',
};
