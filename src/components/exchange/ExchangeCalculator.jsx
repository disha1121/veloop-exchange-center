import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, Sparkles, Zap, ShieldCheck, Info } from 'lucide-react';
import gemImg from '../../assets/burple_diamond.png';
import coinImg from '../../assets/coin.png';
import styles from './ExchangeCalculator.module.css';

function ExchangeCalculator({ availableGems, onCustomConvert }) {
  // Base exchange rate: 1 Gem = ~5.39 VEs
  const RATE = 5.3928;
  const [gemsInput, setGemsInput] = useState(50);

  const parsedGems = Math.max(0, Math.min(availableGems, Number(gemsInput) || 0));
  const calculatedVEs = Math.floor(parsedGems * RATE);

  const handlePercentage = (pct) => {
    const val = Math.floor((availableGems * pct) / 100);
    setGemsInput(val);
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) {
      setGemsInput('');
    } else {
      setGemsInput(Math.min(availableGems, val));
    }
  };

  const handleSwapNow = () => {
    if (parsedGems <= 0) return;
    onCustomConvert({
      id: `custom-${Date.now()}`,
      title: 'Custom Gem Swap',
      type: 'custom',
      requiredGems: parsedGems,
      receiveVEs: calculatedVEs,
      isPopular: false,
      gemTheme: 'purple',
      description: 'Custom instant gem to VE conversion',
    });
  };

  return (
    <div className={styles.calculatorCard}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.badge}>
            <Sparkles size={12} />
            <span>Interactive Exchange</span>
          </div>
          <h3 className={styles.title}>Quick Swap Calculator</h3>
        </div>
        <div className={styles.rateBadge}>
          <Zap size={13} className={styles.zapIcon} />
          <span>1 Gem = {RATE.toFixed(2)} VEs</span>
        </div>
      </div>

      <div className={styles.swapGrid}>
        {/* You Pay (Gems) */}
        <div className={styles.inputCard}>
          <div className={styles.inputHeader}>
            <span className={styles.inputLabel}>You Spend</span>
            <span className={styles.balanceTag}>
              Balance: {availableGems.toLocaleString('en-IN')}
            </span>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.assetGroup}>
              <img src={gemImg} alt="Gems" className={styles.assetIcon} />
              <span className={styles.assetName}>Gems</span>
            </div>
            <input
              type="number"
              className={styles.numberInput}
              value={gemsInput}
              onChange={handleInputChange}
              min={1}
              max={availableGems}
              placeholder="0"
            />
          </div>

          {/* Quick Percentage Pills */}
          <div className={styles.presetButtons}>
            {[25, 50, 75, 100].map((pct) => (
              <button
                key={pct}
                type="button"
                className={styles.presetBtn}
                onClick={() => handlePercentage(pct)}
              >
                {pct === 100 ? 'MAX' : `${pct}%`}
              </button>
            ))}
          </div>
        </div>

        {/* Swap Divider Icon */}
        <div className={styles.swapIconWrapper}>
          <div className={styles.swapIconCircle}>
            <ArrowRightLeft size={18} />
          </div>
        </div>

        {/* You Receive (VEs) */}
        <div className={`${styles.inputCard} ${styles.receiveCard}`}>
          <div className={styles.inputHeader}>
            <span className={styles.inputLabel}>You Receive (Est.)</span>
            <span className={styles.instantTag}>
              <ShieldCheck size={12} /> 0% Fee • Instant
            </span>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.assetGroup}>
              <img src={coinImg} alt="VEs" className={styles.assetIcon} />
              <span className={styles.assetName}>VEs</span>
            </div>
            <div className={styles.calculatedValue}>
              {calculatedVEs.toLocaleString('en-IN')}
            </div>
          </div>
          <div className={styles.receiveSubtext}>
            Bonus multiplier active (+3.5% boosted exchange rate applied)
          </div>
        </div>
      </div>

      {/* CTA Button & Details */}
      <div className={styles.footerRow}>
        <div className={styles.infoText}>
          <Info size={14} className={styles.infoIcon} />
          <span>Real-time platform exchange rate. Instant credit upon confirmation.</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          className={styles.swapActionBtn}
          onClick={handleSwapNow}
          disabled={parsedGems <= 0 || parsedGems > availableGems}
        >
          Swap {parsedGems} Gems Instantly
        </motion.button>
      </div>
    </div>
  );
}

export default ExchangeCalculator;
