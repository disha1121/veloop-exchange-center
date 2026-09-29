import { ArrowRight, ArrowDown } from 'lucide-react';
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

function ExchangeCard({ option, availableGems, onConvert, onEarnMore }) {
  const { title, requiredGems, receiveVEs, isPopular, gemTheme, description } = option;
  const canConvert = availableGems >= requiredGems;
  const gemsNeeded = requiredGems - availableGems;
  const gemGraphic = GEM_IMAGES[gemTheme] || purpleGemImg;

  return (
    <article className={`${styles.card} ${styles[gemTheme]} ${canConvert ? '' : styles.locked}`}>
      {/* Popular Badge */}
      {isPopular && <span className={`${styles.badge} ${styles[`${gemTheme}Badge`]}`}>Popular</span>}

      {/* Visual Header: Gem -> Arrow -> VE Coin */}
      <div className={styles.visualHeader}>
        <div className={styles.gemWrapper}>
          <img src={gemGraphic} alt="Gem" className={styles.gemImage} />
        </div>
        <ArrowRight className={styles.arrowIcon} size={20} />
        <div className={styles.coinWrapper}>
          <img src={coinImg} alt="VE Coin" className={styles.coinImage} />
        </div>
      </div>

      {/* Card Content */}
      <h3 className={styles.title}>{title}</h3>

      {/* Exchange Conversion Values */}
      <div className={styles.conversionBox}>
        <div className={styles.amountRow}>
          <span className={styles.amountNum}>{requiredGems}</span>
          <span className={styles.amountLabel}>Gems</span>
        </div>

        <ArrowDown className={styles.downArrow} size={14} />

        <div className={`${styles.amountRow} ${styles.veAmountRow}`}>
          <span className={styles.amountNum}>{receiveVEs}</span>
          <span className={styles.amountLabel}>VEs</span>
        </div>
      </div>

      {/* Description */}
      <p className={styles.description}>{description}</p>

      {/* Actions */}
      {canConvert ? (
        <button
          type="button"
          className={`${styles.convertBtn} ${styles[`${gemTheme}Btn`]}`}
          onClick={() => onConvert(option)}
        >
          Convert Rewards
        </button>
      ) : (
        <div className={styles.lockedSection}>
          <p className={styles.warningText}>
            You need <strong>{gemsNeeded}</strong> more Gems to unlock this conversion.
          </p>
          <button
            type="button"
            className={styles.earnMoreBtn}
            onClick={onEarnMore}
          >
            Earn More Gems
          </button>
        </div>
      )}
    </article>
  );
}

export default ExchangeCard;