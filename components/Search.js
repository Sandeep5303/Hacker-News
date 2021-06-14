import { FaTimes } from 'react-icons/fa';
import { useContext, useEffect } from 'react';
import Link from 'next/link';

import styles from '@styles/Search.module.css';
import hackerContext from '@context/hackerContext';
import Loader from '@components/Loader';
import { formatDate } from '@config/helper';

export default function Search() {
  const {
    sloading,
    term,
    setShowModal,
    searchResults,
    setTerm,
    addSearchResults,
  } = useContext(hackerContext);

  useEffect(() => {
    addSearchResults(term);
  }, [term]);
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <input
          autoFocus
          type='search'
          name='search'
          id='search'
          value={term}
          placeholder='Search'
          onChange={e => setTerm(e.target.value)}
        />
        <div className={styles.close} onClick={() => setShowModal()}>
          <FaTimes size='2rem' />
        </div>
      </div>
      {sloading && <Loader />}
      <div className={styles.newsContainer}>
        {searchResults.map(result => (
          <Link href={`/news/${result.objectID}`} key={result.objectID}>
            <div className={styles.newsBox} onClick={() => setShowModal()}>
              <div className={styles.top}>
                <h3>{result.title}</h3>
              </div>
              <div className={styles.bottom}>
                <small className={styles.author}>{result.author}</small>
                <small className={styles.date}>
                  {formatDate(result.created_at)}
                </small>
                <small className={styles.cmts}>
                  {result.num_comments} comments
                </small>
                <small className={styles.points}>
                  🤍 <span>{result.points}</span>
                </small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
