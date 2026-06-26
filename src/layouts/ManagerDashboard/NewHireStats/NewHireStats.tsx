import { useState } from "react";
import StatsCard from "../StatsCard/StatsCard";
import { useGetHiresQuery } from "../NewHireStats/NewHireStats.service";
import styles from "./NewHireStats.module.scss";
import AssignTaskModal from "../AssignTaskModal/AssignTaskModal";

const NewHireStats = () => {

  const { data: hires, isLoading, isError } = useGetHiresQuery();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedHireId, setSelectedHireId] = useState<string | null>(null);

  const handleCardClick = (hireId: string) => {
    setSelectedHireId(hireId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHireId(null);
  };


  if (isLoading) return <div className={styles.loading}>Loading team stats...</div>;
  if (isError) return <div className={styles.error}>Failed to load team data.</div>;

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2>New Hire Stats</h2>
      </div>

      {!hires ? (
        <div className={styles.loading}>You have not hired anyone yet</div>
      ) : (
        <div className={styles.grid}>
          {hires.map((hire) => (
            <StatsCard 
              key={hire.id} 
              hire={hire} 
              onClick={handleCardClick} 
            />
          ))}
        </div>
      )}

      {isModalOpen && selectedHireId && (
        <AssignTaskModal 
          hireId={selectedHireId} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default NewHireStats;