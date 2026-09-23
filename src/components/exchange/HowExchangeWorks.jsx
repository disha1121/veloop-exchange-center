import styles from './HowExchangeWorks.module.css';

function HowExchangeWorks({ steps }) {
  return (
    <section className={styles.section} aria-labelledby="how-title">
      <h2 id="how-title" className={styles.heading}>How Exchange Works</h2>

      <ol className={styles.steps}>
        {steps.map((step) => (
          <li key={step.id} className={styles.step}>
            <span className={styles.number}>{String(step.id).padStart(2, '0')}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default HowExchangeWorks;