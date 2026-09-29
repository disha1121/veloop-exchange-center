import { Check, X, Calendar, ArrowRight, ChevronRight } from 'lucide-react';
import purpleGemImg from '../../assets/burple_diamond.png';
import blueGemImg from '../../assets/bluediamond.png';
import greenGemImg from '../../assets/green_diamond.png';
import orangeGemImg from '../../assets/orange_diamond.png';
import coinImg from '../../assets/coin.png';
import styles from './ExchangeHistory.module.css';

const GEM_ICONS = {
  purple: purpleGemImg,
  blue: blueGemImg,
  green: greenGemImg,
  orange: orangeGemImg,
};

function ExchangeHistory({ history }) {
  return (
    <section className={styles.section} aria-labelledby="history-title">
      {/* Header */}
      <div className={styles.header}>
        <h2 id="history-title" className={styles.heading}>Recent Conversions</h2>
        <button type="button" className={styles.viewAllBtn}>View All</button>
      </div>

      {/* List */}
      {history.length === 0 ? (
        <p className={styles.empty}>No conversions yet.</p>
      ) : (
        <ul className={styles.list}>
          {history.map((item) => {
            const gemImg = GEM_ICONS[item.gemTheme] || purpleGemImg;
            const isCompleted = item.status === 'completed';

            return (
              <li key={item.id} className={styles.item}>
                {/* Left Icons + Amounts */}
                <div className={styles.itemLeft}>
                  <div className={styles.iconPair}>
                    <img src={gemImg} alt="" className={styles.miniIcon} />
                    <ArrowRight size={12} className={styles.arrowIcon} />
                    <img src={coinImg} alt="" className={styles.miniIcon} />
                  </div>

                  <div className={styles.details}>
                    <span className={styles.conversionText}>
                      <strong>{item.gems} Gems</strong> → <strong>{item.ves} VEs</strong>
                    </span>
                    <span className={styles.dateText}>
                      {item.date} {item.time && `• ${item.time}`}
                    </span>
                  </div>
                </div>

                {/* Status Pill */}
                <div className={styles.itemRight}>
                  {isCompleted ? (
                    <span className={`${styles.statusBadge} ${styles.completed}`}>
                      Completed <Check size={12} />
                    </span>
                  ) : (
                    <span className={`${styles.statusBadge} ${styles.failed}`}>
                      Failed <X size={12} />
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* Footer Link */}
      <button type="button" className={styles.fullHistoryBtn}>
        <Calendar size={14} />
        <span>View Full History</span>
        <ChevronRight size={14} className={styles.chevronIcon} />
      </button>
    </section>
  );
}

export default ExchangeHistory;