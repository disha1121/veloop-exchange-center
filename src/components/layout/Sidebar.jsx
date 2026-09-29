import { 
  LayoutDashboard, 
  Wallet, 
  Gift, 
  TrendingUp, 
  ArrowLeftRight, 
  Users, 
  History, 
  HelpCircle,
  X 
} from 'lucide-react';
import gemPyramidsImg from '../../assets/coin_pyramids.png';
import styles from './Sidebar.module.css';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '#' },
  { label: 'Wallet', icon: Wallet, href: '#' },
  { label: 'Rewards', icon: Gift, href: '#' },
  { label: 'Level Up & Earn', icon: TrendingUp, href: '#' },
  { label: 'Exchange Center', icon: ArrowLeftRight, href: '#', active: true, badgeDot: true },
  { label: 'Referrals', icon: Users, href: '#' },
  { label: 'History', icon: History, href: '#' },
  { label: 'Support', icon: HelpCircle, href: '#' },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={onClose} />}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        {/* Mobile Close Button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
          <X size={20} />
        </button>

        {/* Logo */}
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <span className={styles.logoV}>V</span>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoBrand}>VELOOP</span>
            <span className={styles.logoSub}>REWARDS</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={styles.nav}>
          <ul>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`${styles.navItem} ${item.active ? styles.active : ''}`}
                  >
                    <IconComponent className={styles.navIcon} size={18} />
                    <span className={styles.navLabel}>{item.label}</span>
                    {item.badgeDot && <span className={styles.activeDot} />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile Card */}
        <div className={styles.userProfile}>
          <div className={styles.avatar}>H</div>
          <div className={styles.userInfo}>
            <div className={styles.userNameRow}>
              <span className={styles.greeting}>Hello,</span>
              <span className={styles.userName}>Hasan</span>
              <span className={styles.levelBadge}>Level 7</span>
            </div>
            <span className={styles.veloopId}>Veloop ID: 78459</span>
          </div>
        </div>

        {/* Earn More Gems Banner */}
        <div className={styles.earnCard}>
          <h4 className={styles.earnTitle}>Earn More Gems!</h4>
          <p className={styles.earnText}>
            Complete tasks, refer friends and unlock more ways to earn Gems.
          </p>
          <div className={styles.earnGraphicWrapper}>
            <img src={gemPyramidsImg} alt="Gems graphics" className={styles.earnGraphic} />
          </div>
          <button type="button" className={styles.exploreBtn}>
            Explore Now
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
