import { Gem, Coins, ArrowDown } from 'lucide-react';
import styles from './ExchangeCard.module.css';

function ExchangeCard({ option, availableGems, onConvert, onEarnMore }) {
  const { title, requiredGems, receiveVEs, isPopular } = option;
  const canConvert = availableGems >= requiredGems;
  const gemsNeeded = requiredGems - availableGems;

  return (
    <article className={`${styles.card} ${canConvert ? '' : styles.locked}`}>
      {isPopular && <span className={styles.badge}>Popular</span>}
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.conversion}>
        <p className={styles.amount}>
          <Gem className={styles.gemIcon} aria-hidden="true" />
          <strong>{requiredGems}</strong> Gems
        </p>
        <ArrowDown className={styles.arrow} aria-hidden="true" />
        <p className={`${styles.amount} ${styles.gold}`}>
          <Coins className={styles.coinIcon} aria-hidden="true" />
          <strong>{receiveVEs}</strong> VEs
        </p>
      </div>

      {canConvert ? (
        <button type="button" className={styles.primaryBtn} onClick={() => onConvert(option)}>
          Convert {requiredGems} Gems
        </button>
      ) : (
        <>
          <p className={styles.warning}>
            Available {availableGems} · Required {requiredGems}
            <br />
            You need {gemsNeeded} more Gems to unlock this conversion.
          </p>
          <button type="button" className={styles.secondaryBtn} onClick={onEarnMore}>
            Earn More Gems
          </button>
        </>
      )}
    </article>
  );
}

export default ExchangeCard;