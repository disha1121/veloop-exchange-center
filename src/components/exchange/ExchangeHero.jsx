import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Zap, ShieldCheck, RefreshCw, ArrowUpRight } from 'lucide-react';
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
      {/* Top Banner Ticker Bar */}
      <div className={styles.topTickerBar}>
        <div className={styles.tickerPill}>
          <Sparkles size={13} className={styles.tickerIcon} />
          <span>VELOOP EXCHANGER v2.0</span>
        </div>
        <div className={styles.tickerItems}>
          <div className={styles.tickerItem}>
            <Zap size={13} className={styles.goldIcon} />
            <span>Exchange Rate: <strong>1 Gem ≈ 5.39 VEs</strong></span>
          </div>
          <div className={styles.divider} />
          <div className={styles.tickerItem}>
            <span className={styles.bonusBadge}>+3.5% Bonus Active</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.tickerItem}>
            <ShieldCheck size={13} className={styles.greenIcon} />
            <span>Instant & 0% Fee</span>
          </div>
        </div>
      </div>

      <div className={styles.heroGrid}>
        {/* Left Column: Title & Balance Cards */}
        <div className={styles.leftCol}>
          <div className={styles.headerTextGroup}>
            <h1 className={styles.mainTitle}>
              Exchange <span className={styles.titleHighlight}>Center</span>
            </h1>
            <h2 className={styles.subTitle}>Convert Your Earned Gems into VEs Instantly</h2>
            <p className={styles.descText}>
              Unlock maximum value from your reward activities. Convert eligible Gems into VEs with zero fees and immediate balance updates.
            </p>
          </div>

          {/* Balance Overview Cards Row */}
          <div className={styles.balanceRow}>
            {/* Gems Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className={`${styles.balanceCard} ${styles.gemsCard}`}
            >
              <div className={styles.cardWatermark}>
                <img src={blueDiamondBg} alt="" aria-hidden="true" />
              </div>
              <div className={styles.cardLeft}>
                <div className={styles.iconCircleGems}>
                  <motion.img 
                    src={gemImg} 
                    alt="Gems" 
                    className={styles.balanceIcon}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>
              <div className={styles.cardRight}>
                <div className={styles.cardLabelRow}>
                  <span className={styles.cardLabel}>Available Gems</span>
                  <InfoTooltip label={infoExplanations.gems.label} text={infoExplanations.gems.text} />
                </div>
                <div className={styles.cardValue}>{gems.toLocaleString('en-IN')}</div>
                <div className={styles.cardFooterTag}>
                  <span>Reward Balance</span>
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </motion.div>

            {/* VEs Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className={`${styles.balanceCard} ${styles.vesCard}`}
            >
              <div className={styles.cardWatermark}>
                <img src={coinImg} alt="" aria-hidden="true" />
              </div>
              <div className={styles.cardLeft}>
                <div className={styles.iconCircleVEs}>
                  <motion.img 
                    src={coinImg} 
                    alt="VEs" 
                    className={styles.balanceIcon}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  />
                </div>
              </div>
              <div className={styles.cardRight}>
                <div className={styles.cardLabelRow}>
                  <span className={styles.cardLabel}>Available VEs</span>
                  <InfoTooltip label={infoExplanations.ves.label} text={infoExplanations.ves.text} />
                </div>
                <div className={`${styles.cardValue} ${styles.goldValue}`}>{ves.toLocaleString('en-IN')}</div>
                <div className={styles.cardFooterTagGold}>
                  <span>Spendable Currency</span>
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Center/Right Column: 3D Vault Stage */}
        <div className={styles.centerVaultCol}>
          <div className={styles.vaultStage}>
            <div className={styles.vaultGlowCircle} />
            <div className={styles.vaultRingPulse} />
            <motion.img
              src={heroVaultImg}
              alt="Reward Vault Gems and VEs"
              className={styles.vaultGraphic}
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, 1.5, 0, -1.5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Rightmost Column: Info Card */}
        <div className={styles.rightInfoCol}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>
              <h3 className={styles.infoCardTitle}>How Currencies Work</h3>
              <span className={styles.infoBadge}>Guide</span>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoBlockHeader}>
                <div className={styles.miniIconWrapper}>
                  <img src={gemImg} alt="" className={styles.infoIconMini} />
                </div>
                <div className={styles.infoTitleCol}>
                  <span className={styles.infoBlockName}>Gems</span>
                  <span className={styles.infoBlockTag}>Earned via tasks</span>
                </div>
                <InfoTooltip label={infoExplanations.gems.label} text={infoExplanations.gems.text} />
              </div>
              <p className={styles.infoBlockDesc}>{infoExplanations.gems.text}</p>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoBlockHeader}>
                <div className={styles.miniIconWrapperGold}>
                  <img src={coinImg} alt="" className={styles.infoIconMini} />
                </div>
                <div className={styles.infoTitleCol}>
                  <span className={styles.infoBlockName}>VEs</span>
                  <span className={styles.infoBlockTagGold}>Redeemable Currency</span>
                </div>
                <InfoTooltip label={infoExplanations.ves.label} text={infoExplanations.ves.text} />
              </div>
              <p className={styles.infoBlockDesc}>{infoExplanations.ves.text}</p>
            </div>

            <button type="button" className={styles.viewRulesBtn} onClick={onScrollToRules}>
              <span>View Exchange Rules</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExchangeHero;