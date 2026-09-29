import { motion } from 'framer-motion';
import { Gem, ListFilter, Search, ShieldCheck, Coins } from 'lucide-react';
import InfoTooltip from './InfoTooltip';
import { infoExplanations } from '../../data/exchangeData';
import styles from './HowExchangeWorks.module.css';

const STEP_ICONS = {
  1: Gem,
  2: ListFilter,
  3: Search,
  4: ShieldCheck,
  5: Coins,
};

function HowExchangeWorks({ steps }) {
  return (
    <section className={styles.section} aria-labelledby="how-title">
      <div className={styles.sectionHeader}>
        <h2 id="how-title" className={styles.heading}>
          How Exchange Works
        </h2>
        <InfoTooltip 
          label={infoExplanations.howItWorks.label} 
          text={infoExplanations.howItWorks.text} 
        />
      </div>

      <div className={styles.stepsContainer}>
        {/* Dotted connecting line */}
        <div className={styles.connectingLine} />

        <ol className={styles.stepsList}>
          {steps.map((step, index) => {
            const IconComponent = STEP_ICONS[step.id] || Gem;
            return (
              <motion.li 
                key={step.id} 
                className={styles.stepItem}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={`${styles.iconCircle} ${styles[`step${step.id}`]}`}>
                  <IconComponent size={20} className={styles.stepIcon} />
                </div>
                
                <span className={styles.stepNum}>{step.stepNum}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default HowExchangeWorks;