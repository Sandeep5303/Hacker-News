import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { useContext, useRef, useEffect } from 'react';

import styles from '@styles/Header.module.css';
import Modal from '@components/Modal';
import hackerContext from '@context/hackerContext';
import { animationHeader } from '@config/animation';

export default function Header() {
  const { showModal, setShowModal } = useContext(hackerContext);
  const logoRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    animationHeader(logoRef, searchRef);
  }, []);

  return (
    <div className={styles.header}>
      <Modal showModal={showModal} />
      <div ref={logoRef} className={styles.logo}>
        <Link href='/'>
          <a>
            <span>hacker</span>news
          </a>
        </Link>
      </div>
      <div
        ref={searchRef}
        className={styles.search}
        onClick={() => setShowModal()}
      >
        <FaSearch />
      </div>
    </div>
  );
}
