import { Crown } from 'lucide-react';
import boxImg from '../../assets/box.png';
import styles from './RewardBanner.module.css';

function RewardBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.leftGroup}>
        <div className={styles.crownCircle}>
          <Crown size={20} className={styles.crownIcon} />
        </div>
        <p className={styles.bannerText}>
          The more Gems you have, the better the rewards you unlock!
          <span className={styles.highlightText}> Keep earning and keep growing.</span>
        </p>
      </div>

      <div className={styles.rightGraphic}>
        <img src={boxImg} alt="Treasure Chest" className={styles.boxImage} />
      </div>
    </div>
  );
}

export default RewardBanner;
