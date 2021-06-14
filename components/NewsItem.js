import Layout from '@components/Layout';
import Comments from '@components/Comments';
import Loader from '@components/Loader';
import styles from '@styles/NewsItem.module.css';
import { parseHTML, formatDate } from '@config/helper';
import hackerContext from '@context/hackerContext';

import { FaLink } from 'react-icons/fa';
import Link from 'next/link';
import { useContext } from 'react';

export default function NewsItem() {
  const createMarkup = () => {
    return { __html: `${currentNews.text}` };
  };
  const { loading, currentNews } = useContext(hackerContext);
  return (
    <Layout>
      {loading && <Loader />}
      {currentNews && (
        <div className={styles.newsItemContainer}>
          <div className={styles.newsBox}>
            <div className={styles.top}>
              <h3>{currentNews.title}</h3>
              <small>{currentNews.author}</small>
              {currentNews.text && (
                <div dangerouslySetInnerHTML={createMarkup()}></div>
              )}
            </div>
            <div className={styles.bottom}>
              <small>{formatDate(currentNews.created_at)}</small>
              <small>{currentNews.children.length} comments</small>
              <small>
                🤍 <span>{currentNews.points}</span>
              </small>
              {currentNews.url && (
                <Link href={currentNews.url}>
                  <a target='_blank'>
                    <small className={styles.link}>
                      <FaLink />
                    </small>
                  </a>
                </Link>
              )}
            </div>
          </div>
          {currentNews.children.length !== 0 && (
            <div className={styles.commentsContainer}>
              {currentNews.children.map(cmt => (
                <Comments cmt={cmt} key={cmt.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </Layout>
  );
}
