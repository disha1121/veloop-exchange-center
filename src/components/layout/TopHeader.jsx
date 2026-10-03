import { Bell, Menu, ArrowRightLeft, Sparkles } from 'lucide-react';
import InfoTooltip from '../exchange/InfoTooltip';
import { infoExplanations } from '../../data/exchangeData';
import gemImg from '../../assets/burple_diamond.png';
import coinImg from '../../assets/coin.png';
import styles from './TopHeader.module.css';

function TopHeader({ gems, ves, onToggleMenu }) {
  const handleQuickSwapScroll = () => {
    const calc = document.querySelector('[class*="calculatorCard"]');
    if (calc) {
      calc.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <button className={styles.mobileMenuBtn} onClick={onToggleMenu} aria-label="Open menu">
        <Menu size={22} />
      </button>

      <div className={styles.leftTitleGroup}>
        <span className={styles.pageBreadcrumb}>VELOOP EXCHANGER</span>
        <span className={styles.liveIndicator}>
          <span className={styles.pulseDot} />
          <span>Live Market</span>
        </span>
      </div>

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
            <span className={`${styles.badgeValue} ${styles.goldValue}`}>{ves.toLocaleString('en-IN')}</span>
            <span className={styles.badgeLabelGold}>VEs</span>
          </div>
          <InfoTooltip label={infoExplanations.ves.label} text={infoExplanations.ves.text} />
        </div>

        {/* Quick Swap CTA */}
        <button type="button" className={styles.quickSwapHeaderBtn} onClick={handleQuickSwapScroll}>
          <ArrowRightLeft size={14} />
          <span>Swap</span>
        </button>

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
