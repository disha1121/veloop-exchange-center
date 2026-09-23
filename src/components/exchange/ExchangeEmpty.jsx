import { PackageOpen } from 'lucide-react';
import styles from './ExchangeEmpty.module.css';

function ExchangeEmpty() {
  return (
    <div className={styles.wrapper}>
      <PackageOpen className={styles.icon} aria-hidden="true" />
      <p className={styles.title}>No conversions available right now.</p>
      <p className={styles.text}>
        New reward conversion opportunities will appear here when available.
      </p>
    </div>
  );
}

export default ExchangeEmpty;