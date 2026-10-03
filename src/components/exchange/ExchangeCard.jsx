import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Lock, CheckCircle2, Zap } from 'lucide-react';
import purpleGemImg from '../../assets/burple_diamond.png';
import blueGemImg from '../../assets/bluediamond.png';
import greenGemImg from '../../assets/green_diamond.png';
import orangeGemImg from '../../assets/orange_diamond.png';
import coinImg from '../../assets/coin.png';
import styles from './ExchangeCard.module.css';

const GEM_IMAGES = {
  purple: purpleGemImg,
  blue: blueGemImg,
  green: greenGemImg,
  orange: orangeGemImg,
};

const TIER_BADGES = {
  purple: 'Most Popular',
  blue: 'Best Value',
  green: 'High Yield',
  orange: 'VIP Exclusive',
};

function ExchangeCard({ option, availableGems, onConvert, onEarnMore }) {
  const { title, requiredGems, receiveVEs, isPopular, gemTheme, description } = option;
  const canConvert = availableGems >= requiredGems;
  const gemsNeeded = requiredGems - availableGems;
  const gemGraphic = GEM_IMAGES[gemTheme] || purpleGemImg;
  const rateRatio = (receiveVEs / requiredGems).toFixed(2);
  const unlockProgress = Math.min(100, Math.round((availableGems / requiredGems) * 100));

  return (
    <motion.article 
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`${styles.card} ${styles[gemTheme]} ${canConvert ? '' : styles.locked}`}
    >
      {/* Top Badge */}
      <div className={styles.topBadgeRow}>
        <span className={`${styles.badge} ${styles[`${gemTheme}Badge`]}`}>
          {isPopular ? <Sparkles size={11} className={styles.sparkleIcon} /> : <Zap size={11} />}
          <span>{TIER_BADGES[gemTheme] || 'Special Option'}</span>
        </span>

        <span className={styles.rateRatioChip}>
          1 Gem = {rateRatio} VEs
        </span>
      </div>

      {/* Visual Swap Connector Header */}
      <div className={styles.visualHeader}>
        <div className={`${styles.gemWrapper} ${styles[`${gemTheme}Glow`]}`}>
          <img src={gemGraphic} alt="Gem" className={styles.gemImage} />
        </div>

        <div className={styles.swapConnector}>
          <div className={styles.connectorLine} />
          <div className={styles.arrowCircle}>
            <ArrowRight size={14} />
          </div>
        </div>

        <div className={`${styles.coinWrapper} ${styles.goldGlow}`}>
          <img src={coinImg} alt="VE Coin" className={styles.coinImage} />
        </div>
      </div>

      {/* Title */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {/* Conversion Value Display */}
      <div className={styles.conversionBox}>
        <div className={styles.amountPill}>
          <span className={styles.amountNum}>{requiredGems}</span>
          <span className={styles.amountLabel}>Gems</span>
        </div>

        <div className={styles.equalsSign}>=</div>

        <div className={`${styles.amountPill} ${styles.vePill}`}>
          <span className={styles.amountNumGold}>{receiveVEs}</span>
          <span className={styles.amountLabelGold}>VEs</span>
        </div>
      </div>

      {/* Unlock Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressHeader}>
          <span className={styles.progressLabel}>
            {canConvert ? (
              <span className={styles.unlockedText}><CheckCircle2 size={12} /> Ready to Exchange</span>
            ) : (
              <span className={styles.progressPercentText}>{unlockProgress}% of Gems required</span>
            )}
          </span>
          {!canConvert && (
            <span className={styles.gemsNeededTag}>Need {gemsNeeded} more</span>
          )}
        </div>
        <div className={styles.track}>
          <div 
            className={`${styles.fill} ${styles[`${gemTheme}Fill`]}`} 
            style={{ width: `${unlockProgress}%` }}
          />
        </div>
      </div>

      {/* Actions */}
      {canConvert ? (
        <button
          type="button"
          className={`${styles.convertBtn} ${styles[`${gemTheme}Btn`]}`}
          onClick={() => onConvert(option)}
        >
          <span>Convert Rewards</span>
          <ArrowRight size={15} />
        </button>
      ) : (
        <button
          type="button"
          className={styles.earnMoreBtn}
          onClick={onEarnMore}
        >
          <Lock size={14} />
          <span>Earn {gemsNeeded} More Gems</span>
        </button>
      )}
    </motion.article>
  );
}

export default ExchangeCard;