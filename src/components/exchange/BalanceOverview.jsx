import InfoTooltip from './InfoTooltip';
import { infoExplanations } from '../../data/exchangeData';
import gemImg from '../../assets/burple_diamond.png';
import coinImg from '../../assets/coin.png';
import styles from './BalanceOverview.module.css';

function BalanceOverview({ gems, ves }) {
  return (
    <section className={styles.wrapper} aria-label="Your balances">
      <div className={styles.card}>
        <img src={gemImg} alt="" className={styles.gemIcon} />
        <div>
          <p className={styles.label}>
            Available Gems
            <InfoTooltip label={infoExplanations.gems.label} text={infoExplanations.gems.text} />
          </p>
          <p className={styles.value}>{gems}</p>
        </div>
      </div>

      <div className={styles.card}>
        <img src={coinImg} alt="" className={styles.coinIcon} />
        <div>
          <p className={styles.label}>
            Available VEs
            <InfoTooltip label={infoExplanations.ves.label} text={infoExplanations.ves.text} />
          </p>
          <p className={styles.value}>{ves.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </section>
  );
}

export default BalanceOverview;