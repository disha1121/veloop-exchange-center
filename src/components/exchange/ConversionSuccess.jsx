import { CheckCircle2, Gem, Coins } from 'lucide-react';
import styles from './ConversionSuccess.module.css';

function ConversionSuccess({ conversion, onContinue }) {
  return (
    <div className={styles.overlay} onClick={onContinue}>
      <div
        className={styles.card}
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
        onClick={(event) => event.stopPropagation()}
      >
        <CheckCircle2 className={styles.checkIcon} aria-hidden="true" />
        <h2 id="success-title" className={styles.title}>Conversion Complete</h2>

        <p className={styles.summary}>
          <span className={styles.amount}>
            <Gem size={18} aria-hidden="true" /> {conversion.requiredGems} Gems converted
          </span>
          <span className={`${styles.amount} ${styles.gold}`}>
            <Coins size={18} aria-hidden="true" /> +{conversion.receiveVEs} VEs added
          </span>
        </p>

        <button type="button" className={styles.continueBtn} onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default ConversionSuccess;