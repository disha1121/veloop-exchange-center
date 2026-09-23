import { CheckCircle2, Loader2, XCircle } from 'lucide-react';
import styles from './ExchangeHistory.module.css';

const STATUS_CONFIG = {
  completed: { label: 'Completed', Icon: CheckCircle2, className: styles.completed },
  pending: { label: 'Processing', Icon: Loader2, className: styles.pending },
  failed: { label: 'Failed', Icon: XCircle, className: styles.failed },
};

function ExchangeHistory({ history }) {
  return (
    <section className={styles.section} aria-labelledby="history-title">
      <h2 id="history-title" className={styles.heading}>Recent Conversions</h2>

      {history.length === 0 ? (
        <p className={styles.empty}>No conversions yet.</p>
      ) : (
        <ul className={styles.list}>
          {history.map((item) => {
            const { label, Icon, className } = STATUS_CONFIG[item.status];
            return (
              <li key={item.id} className={styles.item}>
                <div>
                  <p className={styles.conversion}>
                    {item.gems} Gems → {item.ves} VEs
                  </p>
                  <p className={styles.date}>{item.date}</p>
                </div>
                <span className={`${styles.status} ${className}`}>
                  <Icon size={16} aria-hidden="true" /> {label}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default ExchangeHistory;