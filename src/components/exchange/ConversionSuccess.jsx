import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Share2 } from 'lucide-react';
import checkImg from '../../assets/check.png';
import gemImg from '../../assets/burple_diamond.png';
import coinImg from '../../assets/coin.png';
import styles from './ConversionSuccess.module.css';

function ConversionSuccess({ conversion, onContinue }) {
  return (
    <AnimatePresence>
      <div className={styles.overlay} onClick={onContinue}>
        <motion.div
          className={styles.card}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          onClick={(event) => event.stopPropagation()}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        >
          {/* Confetti Glow Background */}
          <div className={styles.glowBg} />

          {/* 3D Check Shield */}
          <div className={styles.iconWrapper}>
            <motion.img 
              src={checkImg} 
              alt="Success" 
              className={styles.checkIcon} 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
            />
          </div>

          <div className={styles.badge}>
            <Sparkles size={11} />
            <span>Success</span>
          </div>

          <h2 id="success-title" className={styles.title}>Conversion Complete!</h2>
          <p className={styles.subtitle}>Your rewards have been successfully converted and added to your wallet balance.</p>

          <div className={styles.summaryContainer}>
            <div className={styles.summaryBadge}>
              <img src={gemImg} alt="" className={styles.miniIcon} />
              <span><strong>{conversion.requiredGems}</strong> Gems Converted</span>
            </div>
            
            <div className={`${styles.summaryBadge} ${styles.goldBadge}`}>
              <img src={coinImg} alt="" className={styles.miniIcon} />
              <span><strong className={styles.goldText}>+{conversion.receiveVEs}</strong> VEs Added</span>
            </div>
          </div>

          <div className={styles.btnRow}>
            <button type="button" className={styles.continueBtn} onClick={onContinue}>
              <span>Done</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ConversionSuccess;