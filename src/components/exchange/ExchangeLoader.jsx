import { Gem } from 'lucide-react';
import styles from './ExchangeLoader.module.css';

function ExchangeLoader() {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <Gem className={styles.icon} aria-hidden="true" />
      <p className={styles.text}>Preparing your reward conversions...</p>
    </div>
  );
}

export default ExchangeLoader;