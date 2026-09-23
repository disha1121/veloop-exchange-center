import { useState, useRef, useEffect } from 'react';
import { Info } from 'lucide-react';
import styles from './InfoTooltip.module.css';

function InfoTooltip({ label, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <span className={styles.wrapper} ref={wrapperRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-label={`What is ${label}?`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Info size={14} aria-hidden="true" />
      </button>

      {isOpen && (
        <span className={styles.bubble} role="tooltip">
          <strong>{label}</strong>
          <span>{text}</span>
        </span>
      )}
    </span>
  );
}

export default InfoTooltip;