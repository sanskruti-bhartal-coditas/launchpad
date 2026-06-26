import Container from "../../layouts/ManagerDashboard/Container/Container";
import SideBar from "../../layouts/ManagerDashboard/SideBar/SideBar";
import styles from "./MangerDashboard.module.scss";

const MangerDashboard = () =>{
  return(
    <section className={styles.background}>
      <SideBar/>

      <Container/>
    </section>
  )
}

export default MangerDashboard;