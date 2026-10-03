import { 
  LayoutDashboard, 
  Wallet, 
  Gift, 
  TrendingUp, 
  ArrowLeftRight, 
  Users, 
  History, 
  HelpCircle,
  X,
  Sparkles
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
            <span className={styles.logoSub}>REWARDS HUB</span>
          </div>
        </div>

        {/* User Profile Card */}
        <div className={styles.userProfile}>
          <div className={styles.avatarRow}>
            <div className={styles.avatar}>D</div>
            <div className={styles.userInfo}>
              <div className={styles.userNameRow}>
                <span className={styles.greeting}>Welcome,</span>
                <span className={styles.userName}>Disha</span>
              </div>
              <span className={styles.veloopId}>VLRINT202601722</span>
            </div>
          </div>
          <div className={styles.levelProgressCol}>
            <div className={styles.levelHeader}>
              <span className={styles.levelBadge}>Level 7</span>
              <span className={styles.xpText}>780 / 1000 XP</span>
            </div>
            <div className={styles.xpTrack}>
              <div className={styles.xpFill} style={{ width: '78%' }} />
            </div>
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
                    {item.badgeDot && (
                      <span className={styles.activePill}>
                        <Sparkles size={10} />
                        <span>LIVE</span>
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Earn More Gems Banner */}
        <div className={styles.earnCard}>
          <h4 className={styles.earnTitle}>Earn Extra Gems!</h4>
          <p className={styles.earnText}>
            Complete daily quests & invite friends to level up your rewards.
          </p>
          <div className={styles.earnGraphicWrapper}>
            <img src={gemPyramidsImg} alt="Gems graphics" className={styles.earnGraphic} />
          </div>
          <button type="button" className={styles.exploreBtn}>
            Explore Quests
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
