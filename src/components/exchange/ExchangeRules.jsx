import { ShieldCheck } from 'lucide-react';
import InfoTooltip from './InfoTooltip';
import { infoExplanations } from '../../data/exchangeData';
import styles from './ExchangeRules.module.css';

function ExchangeRules({ rules }) {
  return (
    <section className={styles.section} aria-labelledby="rules-title">
      <h2 id="rules-title" className={styles.heading}>
        <ShieldCheck aria-hidden="true" /> Exchange Rules
        <InfoTooltip label={infoExplanations.exchangeRules.label} text={infoExplanations.exchangeRules.text} />
      </h2>

      <ul className={styles.list}>
        {rules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
    </section>
  );
}

export default ExchangeRules;