import { useState, useCallback } from 'react';
import { initialBalance, exchangeOptions, conversionHistory } from '../../data/exchangeData';
import ExchangeHero from '../../components/exchange/ExchangeHero';
import BalanceOverview from '../../components/exchange/BalanceOverview';
import ExchangeCard from '../../components/exchange/ExchangeCard';
import ExchangeModal from '../../components/exchange/ExchangeModal';
import ExchangeHistory from '../../components/exchange/ExchangeHistory';
import styles from './ExchangeCenter.module.css';

function ExchangeCenter() {
  const [balance, setBalance] = useState(initialBalance);
  const [history, setHistory] = useState(conversionHistory);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastConversion, setLastConversion] = useState(null);

  const handleCancel = useCallback(() => setSelectedOption(null), []);

  const handleEarnMore = () => {
    // TODO: baad mein "Earn Gems" page ka link lagayenge
  };

  const handleConfirm = () => {
    if (isProcessing || !selectedOption) return;
    setIsProcessing(true);

    // Dummy delay: backend aane par yahan API call hogi
    setTimeout(() => {
      setBalance((prev) => ({
        gems: prev.gems - selectedOption.requiredGems,
        ves: prev.ves + selectedOption.receiveVEs,
      }));
      setHistory((prev) => [
        {
          id: `h-${Date.now()}`,
          gems: selectedOption.requiredGems,
          ves: selectedOption.receiveVEs,
          date: 'Today',
          status: 'completed',
        },
        ...prev,
      ]);
      setLastConversion(selectedOption);
      setSelectedOption(null);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <main className={styles.page}>
      <ExchangeHero />
      <BalanceOverview gems={balance.gems} ves={balance.ves} />

      {lastConversion && (
        <div className={styles.success} role="status">
          <p>
            ✓ Conversion Complete: {lastConversion.requiredGems} Gems converted,
            +{lastConversion.receiveVEs} VEs added to your balance.
          </p>
          <button type="button" onClick={() => setLastConversion(null)}>Continue</button>
        </div>
      )}

      <h2 className={styles.heading}>Available Conversions</h2>
      <section className={styles.grid}>
        {exchangeOptions.map((option) => (
          <ExchangeCard
            key={option.id}
            option={option}
            availableGems={balance.gems}
            onConvert={setSelectedOption}
            onEarnMore={handleEarnMore}
          />
        ))}
      </section>

      <ExchangeHistory history={history} />

      {selectedOption && (
        <ExchangeModal
          option={selectedOption}
          balance={balance}
          isProcessing={isProcessing}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
    </main>
  );
}

export default ExchangeCenter;