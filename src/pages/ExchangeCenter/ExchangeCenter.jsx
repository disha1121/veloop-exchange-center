import { useState, useCallback, useEffect } from 'react';
import { initialBalance, exchangeOptions, conversionHistory, exchangeSteps, exchangeRules } from '../../data/exchangeData';
import ExchangeHero from '../../components/exchange/ExchangeHero';
import BalanceOverview from '../../components/exchange/BalanceOverview';
import ExchangeCard from '../../components/exchange/ExchangeCard';
import ExchangeModal from '../../components/exchange/ExchangeModal';
import ExchangeHistory from '../../components/exchange/ExchangeHistory';
import HowExchangeWorks from '../../components/exchange/HowExchangeWorks';
import ExchangeRules from '../../components/exchange/ExchangeRules';
import ExchangeLoader from '../../components/exchange/ExchangeLoader';
import ExchangeEmpty from '../../components/exchange/ExchangeEmpty';
import ExchangeError from '../../components/exchange/ExchangeError';
import ConversionSuccess from '../../components/exchange/ConversionSuccess';
import styles from './ExchangeCenter.module.css';

function ExchangeCenter() {
  const [balance, setBalance] = useState(initialBalance);
  const [pageStatus, setPageStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
  const [history, setHistory] = useState(conversionHistory);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastConversion, setLastConversion] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setPageStatus('ready'), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleRetry = () => {
    setPageStatus('loading');
    setTimeout(() => setPageStatus('ready'), 1200);
  };

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
      {pageStatus === 'loading' && <ExchangeLoader />}
      {pageStatus === 'error' && <ExchangeError onRetry={handleRetry} />}

      {pageStatus === 'ready' && (
        <>
          <ExchangeHero />
          <BalanceOverview gems={balance.gems} ves={balance.ves} />

          

          <h2 className={styles.heading}>Available Conversions</h2>
          <section className={styles.grid}>
            {exchangeOptions.length === 0 ? (
              <ExchangeEmpty />
            ) : (
              exchangeOptions.map((option) => (
                <ExchangeCard
                  key={option.id}
                  option={option}
                  availableGems={balance.gems}
                  onConvert={setSelectedOption}
                  onEarnMore={handleEarnMore}
                />
              ))
            )}
          </section>

          <HowExchangeWorks steps={exchangeSteps} />
          <ExchangeHistory history={history} />
          <ExchangeRules rules={exchangeRules} />

          {selectedOption && (
            <ExchangeModal
              option={selectedOption}
              balance={balance}
              isProcessing={isProcessing}
              onCancel={handleCancel}
              onConfirm={handleConfirm}
            />
          )}
          {lastConversion && (
  <ConversionSuccess
    conversion={lastConversion}
    onContinue={() => setLastConversion(null)}
  />
)}
        </>
      )}
    </main>
  );
}

export default ExchangeCenter;