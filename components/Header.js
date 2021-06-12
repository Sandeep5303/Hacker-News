import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

import styles from '@styles/Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <span>hacker</span>news
          </a>
        </Link>
      </div>
      <div className={styles.search}>
        <FaSearch />
      </div>
    </div>
  );
}
