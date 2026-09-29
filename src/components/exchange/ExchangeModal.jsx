import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, X, Loader2 } from 'lucide-react';
import purpleGemImg from '../../assets/burple_diamond.png';
import blueGemImg from '../../assets/bluediamond.png';
import greenGemImg from '../../assets/green_diamond.png';
import orangeGemImg from '../../assets/orange_diamond.png';
import coinImg from '../../assets/coin.png';
import styles from './ExchangeModal.module.css';

const GEM_IMAGES = {
  purple: purpleGemImg,
  blue: blueGemImg,
  green: greenGemImg,
  orange: orangeGemImg,
};

function ExchangeModal({ option, balance, isProcessing, onCancel, onConfirm }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !isProcessing) onCancel();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isProcessing, onCancel]);

  const gemsAfter = balance.gems - option.requiredGems;
  const vesAfter = balance.ves + option.receiveVEs;
  const gemImg = GEM_IMAGES[option.gemTheme] || purpleGemImg;

  return (
    <AnimatePresence>
      <div className={styles.overlay} onClick={isProcessing ? undefined : onCancel}>
        <motion.div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-title"
          onClick={(event) => event.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* Close button */}
          <button 
            type="button" 
            className={styles.closeBtn} 
            onClick={onCancel} 
            disabled={isProcessing}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <h2 id="confirm-title" className={styles.title}>Confirm Conversion</h2>
          <p className={styles.subtitle}>Review your reward conversion details below</p>

          {/* Conversion Visual Box */}
          <div className={styles.conversionCard}>
            <div className={styles.amountBlock}>
              <img src={gemImg} alt="Gem" className={styles.assetIcon} />
              <div className={styles.amountInfo}>
                <span className={styles.amountValue}>{option.requiredGems}</span>
                <span className={styles.amountLabel}>Gems</span>
              </div>
            </div>

            <div className={styles.arrowCircle}>
              <ArrowDown size={16} />
            </div>

            <div className={`${styles.amountBlock} ${styles.goldBlock}`}>
              <img src={coinImg} alt="VE Coin" className={styles.assetIcon} />
              <div className={styles.amountInfo}>
                <span className={styles.amountValue}>{option.receiveVEs}</span>
                <span className={styles.amountLabel}>VEs</span>
              </div>
            </div>
          </div>

          {/* Balance summary before and after */}
          <div className={styles.summaryGrid}>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Gems after conversion</span>
              <span className={styles.summaryValue}>{gemsAfter.toLocaleString('en-IN')}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>VEs after conversion</span>
              <span className={`${styles.summaryValue} ${styles.goldText}`}>
                {vesAfter.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onCancel}
              disabled={isProcessing}
            >
              Cancel
            </button>

            <button
              type="button"
              className={styles.confirmBtn}
              onClick={onConfirm}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 size={16} className={styles.spinner} />
                  <span>Converting...</span>
                </>
              ) : (
                'Confirm Conversion'
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ExchangeModal;