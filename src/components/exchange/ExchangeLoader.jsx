import { motion } from 'framer-motion';
import gemImg from '../../assets/burple_diamond.png';
import coinImg from '../../assets/coin.png';
import styles from './ExchangeLoader.module.css';

function ExchangeLoader() {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <div className={styles.animationStage}>
        <motion.img
          src={gemImg}
          alt="Loading Gem"
          className={styles.gemIcon}
          animate={{
            y: [-8, 8, -8],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img
          src={coinImg}
          alt="Loading Coin"
          className={styles.coinIcon}
          animate={{
            y: [8, -8, 8],
            rotate: [0, -15, 15, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
      </div>

      <div className={styles.barWrapper}>
        <motion.div
          className={styles.progressBar}
          animate={{ width: ['0%', '100%'] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <p className={styles.text}>Preparing your reward conversions...</p>
    </div>
  );
}

export default ExchangeLoader;