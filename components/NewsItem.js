import Layout from '@components/Layout';
import Comments from '@components/Comments';
import styles from '@styles/NewsItem.module.css';
import { parseHTML } from '@config/helper';

import { FaLink } from 'react-icons/fa';
import Link from 'next/link';

export default function NewsItem({ nw }) {
  return (
    <Layout>
      <div className={styles.newsItemContainer}>
        <div className={styles.newsBox}>
          <div className={styles.top}>
            <h3>{nw.title}</h3>
            <small>{nw.author}</small>
            {nw.text && <p>{parseHTML(nw.text)}</p>}
          </div>
          <div className={styles.bottom}>
            <small>{nw.created_at}</small>
            <small>{nw.children.length} comments</small>
            <small>
              🤍 <span>{nw.points}</span>
            </small>
            {nw.url && (
              <Link href={nw.url}>
                <a target='_blank'>
                  <small className={styles.link}>
                    <FaLink />
                  </small>
                </a>
              </Link>
            )}
          </div>
        </div>
        {nw.children.length !== 0 && (
          <div className={styles.commentsContainer}>
            {nw.children.map(cmt => (
              <Comments cmt={cmt} key={cmt.id} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
