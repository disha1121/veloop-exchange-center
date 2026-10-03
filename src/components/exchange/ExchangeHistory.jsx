import { useState } from 'react';
import { Check, X, Calendar, ArrowRight, ChevronRight, Search, History } from 'lucide-react';
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
  const [filter, setFilter] = useState('all'); // 'all' | 'completed' | 'failed'
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHistory = history.filter((item) => {
    const matchesFilter = filter === 'all' || item.status === filter;
    const matchesSearch =
      item.gems.toString().includes(searchQuery) ||
      item.ves.toString().includes(searchQuery) ||
      item.date.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className={styles.section} aria-labelledby="history-title">
      {/* Header & Controls */}
      <div className={styles.header}>
        <div className={styles.headerTitleRow}>
          <History size={18} className={styles.headerIcon} />
          <h2 id="history-title" className={styles.heading}>Recent Conversions</h2>
        </div>

        {/* Filter Pills */}
        <div className={styles.filterPills}>
          {['all', 'completed', 'failed'].map((f) => (
            <button
              key={f}
              type="button"
              className={`${styles.filterBtn} ${filter === f ? styles.activeFilter : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input Bar */}
      <div className={styles.searchBar}>
        <Search size={14} className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search by amount or date..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* List */}
      {filteredHistory.length === 0 ? (
        <div className={styles.emptyBox}>
          <p className={styles.empty}>No conversions found matching criteria.</p>
        </div>
      ) : (
        <ul className={styles.list}>
          {filteredHistory.map((item) => {
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
                      <strong>{item.gems} Gems</strong> → <strong className={styles.goldText}>{item.ves} VEs</strong>
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
                      <span className={styles.dotGreen} />
                      Completed
                    </span>
                  ) : (
                    <span className={`${styles.statusBadge} ${styles.failed}`}>
                      <span className={styles.dotRed} />
                      Failed
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
        <span>View Full Activity Log</span>
        <ChevronRight size={14} className={styles.chevronIcon} />
      </button>
    </section>
  );
}

export default ExchangeHistory;