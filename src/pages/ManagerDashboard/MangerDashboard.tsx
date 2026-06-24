import { useState } from "react";
import Container from "../../layouts/ManagerDashboard/Container/Container";
import SideBar from "../../layouts/ManagerDashboard/SideBar/SideBar";
import styles from "./MangerDashboard.module.scss";

const MangerDashboard = () =>{
  const [isOnboardHireOpen, setOnboardHire] = useState(false)
  return(
    <section className={styles.background}>
      <SideBar handleSetOnboardHire = {setOnboardHire}/>

      <Container onboardState={isOnboardHireOpen} handleSetOnboardHire = {setOnboardHire}/>
    </section>
  )
}

export default MangerDashboard;