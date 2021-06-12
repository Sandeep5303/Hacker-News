import { AnimatePresence, motion } from 'framer-motion';

import styles from '@styles/Modal.module.css';
import Search from '@components/Search';

export default function Modal({ showModal, setShowModal }) {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className={styles.backdrop}
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div className={styles.modal}>
            <Search />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
