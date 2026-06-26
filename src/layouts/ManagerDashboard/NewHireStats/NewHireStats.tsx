import StatsCard from "../StatsCard/StatsCard";
import { useGetHiresQuery } from "../NewHireStats/NewHireStats.service";
import styles from "./NewHireStats.module.scss";
import Fallback from "../../../components/Fallback/Fallback";

const NewHireStats = () => {

  const { data: hires, isLoading, isError } = useGetHiresQuery();

  if (isLoading) return <Fallback text="Loading team stats..."/>;
  if (isError) return <Fallback text="Failed to load team data."/>;

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2>My Team</h2>
      </div>

      {!hires ? (
        <Fallback text="You have not hired anyone yet"/>
      ) : (
        <div className={styles.grid}>
          {hires.map((hire) => (
            <StatsCard 
              key={hire.id} 
              hire={hire} 
              onClick={()=>{}} 
            />
          ))}
        </div>
      )}

    </section>
  );
};

export default NewHireStats;