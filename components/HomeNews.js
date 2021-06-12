import styles from '@styles/HomeNews.module.css';

export default function HomeNews({ nw }) {
  return (
    <div className={styles.newsBox}>
      <div className={styles.top}>
        <h3>{nw.title}</h3>
        <small>{nw.author}</small>
      </div>
      <div className={styles.bottom}>
        <small>{nw.created_at}</small>
        <small>{nw.children.length} comments</small>
        <small>
          🤍 <span>{nw.points}</span>
        </small>
      </div>
    </div>
  );
}
