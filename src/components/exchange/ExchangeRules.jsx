import { CheckCircle2 } from 'lucide-react';
import InfoTooltip from './InfoTooltip';
import { infoExplanations } from '../../data/exchangeData';
import shieldCheckImg from '../../assets/check.png';
import styles from './ExchangeRules.module.css';

function ExchangeRules({ rules }) {
  return (
    <section className={styles.section} id="exchange-rules-section" aria-labelledby="rules-title">
      <div className={styles.contentGrid}>
        {/* Left Column: Rules Checklist */}
        <div className={styles.leftCol}>
          <div className={styles.sectionHeader}>
            <h2 id="rules-title" className={styles.heading}>
              Exchange Rules
            </h2>
            <InfoTooltip
              label={infoExplanations.exchangeRules.label}
              text={infoExplanations.exchangeRules.text}
            />
          </div>

          <ul className={styles.rulesList}>
            {rules.map((rule) => (
              <li key={rule} className={styles.ruleItem}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span className={styles.ruleText}>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: 3D Shield Check Graphic */}
        <div className={styles.rightCol}>
          <div className={styles.shieldWrapper}>
            <img src={shieldCheckImg} alt="Shield Check Rules" className={styles.shieldImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExchangeRules;