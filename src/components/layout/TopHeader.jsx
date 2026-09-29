import { Bell, Menu } from 'lucide-react';
import InfoTooltip from '../exchange/InfoTooltip';
import { infoExplanations } from '../../data/exchangeData';
import gemImg from '../../assets/burple_diamond.png';
import coinImg from '../../assets/coin.png';
import styles from './TopHeader.module.css';

function TopHeader({ gems, ves, onToggleMenu }) {
  return (
    <header className={styles.header}>
      <button className={styles.mobileMenuBtn} onClick={onToggleMenu} aria-label="Open menu">
        <Menu size={22} />
      </button>

      <div className={styles.rightSection}>
        {/* Gems Balance Badge */}
        <div className={styles.balanceBadge}>
          <img src={gemImg} alt="Gems" className={styles.badgeIcon} />
          <div className={styles.badgeContent}>
            <span className={styles.badgeValue}>{gems.toLocaleString('en-IN')}</span>
            <span className={styles.badgeLabel}>Gems</span>
          </div>
          <InfoTooltip label={infoExplanations.gems.label} text={infoExplanations.gems.text} />
        </div>

        {/* VEs Balance Badge */}
        <div className={`${styles.balanceBadge} ${styles.veBadge}`}>
          <img src={coinImg} alt="VEs" className={styles.badgeIcon} />
          <div className={styles.badgeContent}>
            <span className={styles.badgeValue}>{ves.toLocaleString('en-IN')}</span>
            <span className={styles.badgeLabel}>VEs</span>
          </div>
          <InfoTooltip label={infoExplanations.ves.label} text={infoExplanations.ves.text} />
        </div>

        {/* Notifications Icon */}
        <button type="button" className={styles.notifBtn} aria-label="Notifications">
          <Bell size={18} />
          <span className={styles.notifBadge}>3</span>
        </button>
      </div>
    </header>
  );
}

export default TopHeader;
