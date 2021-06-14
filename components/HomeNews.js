import styles from '@styles/HomeNews.module.css';
import { formatDate } from '@config/helper';

import Link from 'next/link';

export default function HomeNews({ nw }) {
  return (
    <Link href={`/news/${nw.objectID}`}>
      <div className={styles.newsBox}>
        <div className={styles.top}>
          <h3>{nw.title}</h3>
          <small>{nw.author}</small>
        </div>
        <div className={styles.bottom}>
          <small>{formatDate(nw.created_at)}</small>
          <small>{nw.num_comments} comments</small>
          <small>
            🤍 <span>{nw.points}</span>
          </small>
        </div>
      </div>
    </Link>
  );
}
