import styles from "./StatsCard.module.scss";
import type { Hire } from "../NewHireStats/NewHireStats.types";

interface StatsCardProps {
  hire: Hire;
  onClick: (hireId: string) => void;
}

const StatsCard = ({ hire, onClick }: StatsCardProps) => {


  return (
    // on clicking card it will open the assign task form
    <div className={styles.card} onClick={() => onClick(hire.id)}>
      <div className={styles.header}>
        <h3>{hire.name}</h3>
      </div>
      <div className={styles.details}>Role: {hire.role}</div>
      <div className={styles.details}>
        <p>Email: {hire.email}</p>
      </div>
    </div>
  );
};

export default StatsCard;