import Layout from '@components/Layout';
import Comments from '@components/Comments';
import styles from '@styles/NewsItem.module.css';

export default function NewsItem({ nw }) {
  // convert html string into text
  const parseHTML = text => {
    return text.replace(/(<([^>]+)>)/g, '');
  };
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
          </div>
        </div>
        <div className={styles.commentsContainer}>
          {nw.children.length !== 0 &&
            nw.children.map(cmt => <Comments cmt={cmt} />)}
        </div>
      </div>
    </Layout>
  );
}

// make comment box
