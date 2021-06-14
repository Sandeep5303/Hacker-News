import styles from '@styles/Comments.module.css';

export default function Comments({ cmt }) {
  const createMarkup = () => {
    return { __html: `${cmt.text}` };
  };
  return (
    <div className={styles.comments}>
      <div className={styles.cmtTop}>
        <small>{cmt.author}</small>
        <small>{cmt.created_at}</small>
      </div>
      <div
        className={styles.cmtBottom}
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
    </div>
  );
}
