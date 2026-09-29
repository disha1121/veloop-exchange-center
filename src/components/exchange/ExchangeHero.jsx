import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import InfoTooltip from './InfoTooltip';
import { infoExplanations } from '../../data/exchangeData';
import gemImg from '../../assets/burple_diamond.png';
import coinImg from '../../assets/coin.png';
import heroVaultImg from '../../assets/dimond_coin.png';
import blueDiamondBg from '../../assets/bluediamond.png';
import styles from './ExchangeHero.module.css';

function ExchangeHero({ gems, ves, onScrollToRules }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>
        {/* Left Column: Title & Balance Cards */}
        <div className={styles.leftCol}>
          <div className={styles.headerTextGroup}>
            <h1 className={styles.mainTitle}>Exchange Center</h1>
            <h2 className={styles.subTitle}>Turn Your Earned Gems into VEs</h2>
            <p className={styles.descText}>
              Convert your eligible Gems into VEs and continue your reward journey.
            </p>
          </div>

          {/* Balance Overview Cards Row */}
          <div className={styles.balanceRow}>
            {/* Gems Card */}
            <div className={`${styles.balanceCard} ${styles.gemsCard}`}>
              <div className={styles.cardWatermark}>
                <img src={blueDiamondBg} alt="" aria-hidden="true" />
              </div>
              <div className={styles.cardLeft}>
                <motion.img 
                  src={gemImg} 
                  alt="Gems" 
                  className={styles.balanceIcon}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              <div className={styles.cardRight}>
                <div className={styles.cardLabelRow}>
                  <span className={styles.cardLabel}>Available Gems</span>
                  <InfoTooltip label={infoExplanations.gems.label} text={infoExplanations.gems.text} />
                </div>
                <div className={styles.cardValue}>{gems.toLocaleString('en-IN')}</div>
                <div className={styles.cardSubtext}>Your Reward Gems</div>
              </div>
            </div>

            {/* VEs Card */}
            <div className={`${styles.balanceCard} ${styles.vesCard}`}>
              <div className={styles.cardWatermark}>
                <img src={coinImg} alt="" aria-hidden="true" />
              </div>
              <div className={styles.cardLeft}>
                <motion.img 
                  src={coinImg} 
                  alt="VEs" 
                  className={styles.balanceIcon}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
              </div>
              <div className={styles.cardRight}>
                <div className={styles.cardLabelRow}>
                  <span className={styles.cardLabel}>Available VEs</span>
                  <InfoTooltip label={infoExplanations.ves.label} text={infoExplanations.ves.text} />
                </div>
                <div className={styles.cardValue}>{ves.toLocaleString('en-IN')}</div>
                <div className={styles.cardSubtext}>Your VE Balance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Center/Right Column: 3D Vault Illustration Banner */}
        <div className={styles.centerVaultCol}>
          <div className={styles.vaultStage}>
            <div className={styles.vaultGlowCircle} />
            <motion.img
              src={heroVaultImg}
              alt="Reward Vault Gems and VEs"
              className={styles.vaultGraphic}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Rightmost Column: "What are these?" Card */}
        <div className={styles.rightInfoCol}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoCardTitle}>What are these?</h3>

            <div className={styles.infoBlock}>
              <div className={styles.infoBlockHeader}>
                <img src={gemImg} alt="" className={styles.infoIconMini} />
                <span className={styles.infoBlockName}>Gems</span>
                <InfoTooltip label={infoExplanations.gems.label} text={infoExplanations.gems.text} />
              </div>
              <p className={styles.infoBlockDesc}>{infoExplanations.gems.text}</p>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoBlockHeader}>
                <img src={coinImg} alt="" className={styles.infoIconMini} />
                <span className={styles.infoBlockName}>VEs</span>
                <InfoTooltip label={infoExplanations.ves.label} text={infoExplanations.ves.text} />
              </div>
              <p className={styles.infoBlockDesc}>{infoExplanations.ves.text}</p>
            </div>

            <button type="button" className={styles.viewRulesBtn} onClick={onScrollToRules}>
              View All Rules <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExchangeHero;