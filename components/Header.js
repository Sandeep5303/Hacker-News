import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { useContext } from 'react';

import styles from '@styles/Header.module.css';
import Modal from '@components/Modal';
import hackerContext from '@context/hackerContext';

export default function Header() {
  const { showModal, setShowModal } = useContext(hackerContext);

  return (
    <div className={styles.header}>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <span>hacker</span>news
          </a>
        </Link>
      </div>
      <div className={styles.search} onClick={() => setShowModal()}>
        <FaSearch />
      </div>
    </div>
  );
}
