import { useEffect } from 'react';
import { Gem, Coins, ArrowDown } from 'lucide-react';
import styles from './ExchangeModal.module.css';

function ExchangeModal({ option, balance, isProcessing, onCancel, onConfirm }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !isProcessing) onCancel();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isProcessing, onCancel]);

  const gemsAfter = balance.gems - option.requiredGems;
  const vesAfter = balance.ves + option.receiveVEs;

  return (
    <div className={styles.overlay} onClick={isProcessing ? undefined : onCancel}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="confirm-title" className={styles.title}>Confirm Conversion</h2>

        <div className={styles.conversion}>
          <p className={styles.amount}><Gem aria-hidden="true" /> {option.requiredGems} Gems</p>
          <ArrowDown aria-hidden="true" />
          <p className={`${styles.amount} ${styles.gold}`}><Coins aria-hidden="true" /> {option.receiveVEs} VEs</p>
        </div>

        <dl className={styles.summary}>
          <div>
            <dt>Gems after conversion</dt>
            <dd>{gemsAfter}</dd>
          </div>
          <div>
            <dt>VEs after conversion</dt>
            <dd>{vesAfter.toLocaleString('en-IN')}</dd>
          </div>
        </dl>

        <div className={styles.actions}>
          <button type="button" className={styles.cancelBtn} onClick={onCancel} disabled={isProcessing}>
            Cancel
          </button>
          <button type="button" className={styles.confirmBtn} onClick={onConfirm} disabled={isProcessing}>
            {isProcessing ? 'Converting...' : 'Confirm Conversion'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExchangeModal;