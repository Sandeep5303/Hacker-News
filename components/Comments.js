import styles from '@styles/Comments.module.css';
import { parseHTML } from '@config/helper';

export default function Comments({ cmt }) {
  return (
    <div className={styles.comments}>
      <div className={styles.cmtTop}>
        <small>{cmt.author}</small>
        <small>{cmt.created_at}</small>
      </div>
      <div className={styles.cmtBottom}>
        <p>{parseHTML(cmt.text)}</p>
      </div>
    </div>
  );
}
