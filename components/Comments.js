import styles from '@styles/Comments.module.css';

export default function Comments({ cmt }) {
  // convert html string into text
  const parseHTML = text => {
    return text.replace(/(<([^>]+)>)/g, '');
  };
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
