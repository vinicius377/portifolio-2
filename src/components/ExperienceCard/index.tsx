import styles from "./styles.module.css";
import { useDebounce } from "../../hooks/useDebounce";
import type { Experience } from "../../types/Experience";
import { useRef } from "react";

interface CardProps {
  experience: Experience
  setOpenedDetails:(id: number) => void
  id: number;
  currentId: number
}

export function Card({ experience, setOpenedDetails, id, currentId }: CardProps) {
  const { business, time, title, description } = experience
  const descriptionRef = useRef<HTMLDivElement | null>(null)
  const openedDetails = id === currentId;

  const { trigger: handleBlurContent, clear } = useDebounce({
    delay: 12000,
    fn: () => setOpenedDetails(0),
  });

  const onBlurContent = () => {
    if (!openedDetails) return;
    handleBlurContent();
  };

  const handleOpenDetails = () => {
    setOpenedDetails(openedDetails ? 0 : id);
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleOpenDetails()
      setTimeout(()=> {
          descriptionRef.current?.focus()
      }, 200)
    }
  }

  return (
    <div
      onClick={() => handleOpenDetails()}
      onMouseOver={() => clear()}
      onMouseLeave={() => onBlurContent()}
      onKeyDown={onKeyPress}
      className={styles.container}
      data-openeddetails={openedDetails}
      tabIndex={0}
    >
      {openedDetails ? (
        <div className={styles.description} onBlur={() => onBlurContent()}>
          <div ref={descriptionRef} tabIndex={0}>
            {description}
          </div>
        </div>
      ) : (
        <>
          <div className={styles.content}>
            <h2 className={styles.head}>{title}</h2>
            <span className={styles.business}>{business}</span>
            <span className={styles.time}>{time}</span>
          </div>
          <div className={styles.hoverContent}>
            <h3 aria-label="Enter para ver detalhes">Ver Detalhes</h3>
            <span className={styles.setStateCode} aria-hidden="true">
              setOpenedDetails
              (<span className={styles.setStateCodeValue}>true</span>)
            </span>
          </div>
        </>
      )}
    </div>
  );
}
