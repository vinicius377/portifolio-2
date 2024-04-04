import styles from "./styles.module.css";
import { useDebounce } from "../../hooks/useDebounce";
import type { Experience } from "../../types/Experience";

interface CardProps {
  experience: Experience
  setOpenedDetails:(id: number) => void
  id: number;
  currentId: number
}

export function Card({ experience, setOpenedDetails, id, currentId }: CardProps) {
  const { business, time, title, description } = experience
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

  return (
    <div
      onClick={() => handleOpenDetails()}
      className={styles.container}
      onMouseOver={() => clear()}
      onMouseLeave={() => onBlurContent()}
      data-openedDetails={openedDetails}
    >
      {openedDetails ? (
        <div className={styles.description} onBlur={() => onBlurContent()}>
          <div>
            {description}
          </div>
        </div>
      ) : (
        <>
          <div className={styles.content}>
            <h4 className={styles.head}>{title}</h4>
            <span className={styles.business}>{business}</span>
            <span className={styles.time}>{time}</span>
          </div>
          <div className={styles.hoverContent}>
            <h4>Ver Detalhes</h4>
            <span className={styles.setStateCode}>
              setOpenedDetails(
              <span className={styles.setStateCodeValue}>true</span>)
            </span>
          </div>
        </>
      )}
    </div>
  );
}
