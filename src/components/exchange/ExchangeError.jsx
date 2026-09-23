import { AlertTriangle } from 'lucide-react';
import styles from './ExchangeError.module.css';

function ExchangeError({ onRetry }) {
  return (
    <div className={styles.wrapper} role="alert">
      <AlertTriangle className={styles.icon} aria-hidden="true" />
      <p className={styles.title}>Unable to load exchange options.</p>
      <p className={styles.text}>Please try again.</p>
      <button type="button" className={styles.retryBtn} onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

export default ExchangeError;
