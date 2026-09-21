import styles from './ExchangeHero.module.css';

function ExchangeHero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Exchange Center</h1>
      <p className={styles.subtitle}>Turn Your Earned Gems into VEs</p>
      <p className={styles.text}>
        Convert your eligible Gems into VEs and continue your reward journey.
      </p>
    </section>
  );
}

export default ExchangeHero;