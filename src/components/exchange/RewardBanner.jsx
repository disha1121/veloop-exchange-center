import { Crown, Sparkles, ArrowRight } from 'lucide-react';
import boxImg from '../../assets/box.png';
import styles from './RewardBanner.module.css';

function RewardBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.glowEffect} />

      <div className={styles.leftGroup}>
        <div className={styles.crownCircle}>
          <Crown size={22} className={styles.crownIcon} />
        </div>
        <div className={styles.textGroup}>
          <div className={styles.bannerBadge}>
            <Sparkles size={11} />
            <span>VIP Reward Boost</span>
          </div>
          <p className={styles.bannerText}>
            The more Gems you exchange, the higher your platform VIP tier grows!
            <span className={styles.highlightText}> Unlock exclusive exchange rates & daily bonus rewards.</span>
          </p>
        </div>
      </div>

      <div className={styles.rightGroup}>
        <button type="button" className={styles.claimBtn}>
          <span>View VIP Perks</span>
          <ArrowRight size={14} />
        </button>

        <div className={styles.rightGraphic}>
          <img src={boxImg} alt="Treasure Chest" className={styles.boxImage} />
        </div>
      </div>
    </div>
  );
}

export default RewardBanner;
