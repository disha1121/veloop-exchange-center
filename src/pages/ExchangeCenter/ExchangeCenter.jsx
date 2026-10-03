import { useState, useCallback, useEffect } from 'react';
import { initialBalance, exchangeOptions, conversionHistory, exchangeSteps, exchangeRules, infoExplanations } from '../../data/exchangeData';
import Sidebar from '../../components/layout/Sidebar';
import TopHeader from '../../components/layout/TopHeader';
import ExchangeHero from '../../components/exchange/ExchangeHero';
import ExchangeCalculator from '../../components/exchange/ExchangeCalculator';
import ExchangeCard from '../../components/exchange/ExchangeCard';
import RewardBanner from '../../components/exchange/RewardBanner';
import HowExchangeWorks from '../../components/exchange/HowExchangeWorks';
import ExchangeHistory from '../../components/exchange/ExchangeHistory';
import ExchangeRules from '../../components/exchange/ExchangeRules';
import ExchangeModal from '../../components/exchange/ExchangeModal';
import ConversionSuccess from '../../components/exchange/ConversionSuccess';
import ExchangeLoader from '../../components/exchange/ExchangeLoader';
import ExchangeEmpty from '../../components/exchange/ExchangeEmpty';
import ExchangeError from '../../components/exchange/ExchangeError';
import InfoTooltip from '../../components/exchange/InfoTooltip';
import styles from './ExchangeCenter.module.css';

function ExchangeCenter() {
  const [balance, setBalance] = useState(initialBalance);
  const [pageStatus, setPageStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
  const [history, setHistory] = useState(conversionHistory);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastConversion, setLastConversion] = useState(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPageStatus('ready'), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleRetry = () => {
    setPageStatus('loading');
    setTimeout(() => setPageStatus('ready'), 800);
  };

  const handleCancel = useCallback(() => setSelectedOption(null), []);

  const handleEarnMore = () => {
    const rulesEl = document.getElementById('exchange-rules-section');
    if (rulesEl) {
      rulesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToRules = () => {
    const rulesEl = document.getElementById('exchange-rules-section');
    if (rulesEl) {
      rulesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConfirm = () => {
    if (isProcessing || !selectedOption) return;
    setIsProcessing(true);

    // Simulate exchange processing delay
    setTimeout(() => {
      setBalance((prev) => ({
        gems: prev.gems - selectedOption.requiredGems,
        ves: prev.ves + selectedOption.receiveVEs,
      }));

      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

      setHistory((prev) => [
        {
          id: `h-${Date.now()}`,
          gems: selectedOption.requiredGems,
          ves: selectedOption.receiveVEs,
          date: 'Today',
          time: timeString,
          status: 'completed',
          gemTheme: selectedOption.gemTheme || 'purple',
        },
        ...prev,
      ]);

      setLastConversion(selectedOption);
      setSelectedOption(null);
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <div className={styles.appLayout}>
      {/* Sidebar Navigation */}
      <Sidebar 
        isOpen={isMobileSidebarOpen} 
        onClose={() => setIsMobileSidebarOpen(false)} 
      />

      {/* Main App Content */}
      <div className={styles.mainContent}>
        {/* Top Header Bar */}
        <TopHeader 
          gems={balance.gems} 
          ves={balance.ves} 
          onToggleMenu={() => setIsMobileSidebarOpen(true)} 
        />

        {/* Inner Page View */}
        <main className={styles.pageContainer}>
          {pageStatus === 'loading' && <ExchangeLoader />}
          {pageStatus === 'error' && <ExchangeError onRetry={handleRetry} />}

          {pageStatus === 'ready' && (
            <>
              {/* Hero Section */}
              <ExchangeHero 
                gems={balance.gems} 
                ves={balance.ves} 
                onScrollToRules={handleScrollToRules} 
              />

              {/* Interactive Quick Swap Calculator */}
              <ExchangeCalculator
                availableGems={balance.gems}
                onCustomConvert={setSelectedOption}
              />

              {/* Available Conversions Header */}
              <section className={styles.conversionsSection}>
                <div className={styles.conversionsHeader}>
                  <div className={styles.conversionsTitleRow}>
                    <h2 className={styles.sectionHeading}>Predefined Exchange Tiers</h2>
                    <InfoTooltip
                      label={infoExplanations.availableConversions.label}
                      text={infoExplanations.availableConversions.text}
                    />
                  </div>
                  <p className={styles.sectionSubheading}>Select a predefined tier to exchange your accumulated reward Gems into VEs.</p>
                </div>

                {/* Cards Grid */}
                <div className={styles.cardsGrid}>
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
                </div>

                {/* Promotional Reward Banner */}
                <RewardBanner />
              </section>

              {/* How Exchange Works Guide */}
              <HowExchangeWorks steps={exchangeSteps} />

              {/* Bottom Split Layout: Rules & Recent History */}
              <div className={styles.bottomSplitGrid}>
                <div className={styles.rulesCol}>
                  <ExchangeRules rules={exchangeRules} />
                </div>
                <div className={styles.historyCol}>
                  <ExchangeHistory history={history} />
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      {/* Confirmation Modal Dialog */}
      {selectedOption && (
        <ExchangeModal
          option={selectedOption}
          balance={balance}
          isProcessing={isProcessing}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}

      {/* Success Celebration Popup */}
      {lastConversion && (
        <ConversionSuccess
          conversion={lastConversion}
          onContinue={() => setLastConversion(null)}
        />
      )}
    </div>
  );
}

export default ExchangeCenter;