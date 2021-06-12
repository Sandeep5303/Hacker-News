import { FaTimes } from 'react-icons/fa';
import { useContext, useRef } from 'react';

import styles from '@styles/Search.module.css';
import hackerContext from '@context/hackerContext';

export default function Search() {
  const { setShowModal } = useContext(hackerContext);
  const searchRef = useRef(null);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <input
          ref={searchRef}
          autoFocus
          type='search'
          name='search'
          id='search'
          placeholder='Search'
        />
        <div className={styles.close} onClick={() => setShowModal()}>
          <FaTimes size='2rem' />
        </div>
      </div>
      <div className={styles.newsContainer}>
        <div className={styles.newsBox}>
          <div className={styles.bottom}>
            <h3>Y-Combinator</h3>
            <small>Sandeep</small>
            <small>2009-01-28T20:31:44.000Z</small>
            <small>1 comments</small>
            <small>
              🤍 <span>222</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
