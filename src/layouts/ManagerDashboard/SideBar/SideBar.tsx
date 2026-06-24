import { useDispatch } from "react-redux";
import SidebarItems from "../../../components/SidebarItems/SidebarItems";
import styles from "./SideBar.module.scss"
import { logout } from "../../../redux/authSlice";
import type { SideBarProps } from "./Sidebar.types";

const SideBar = ({handleSetOnboardHire}:SideBarProps) => {

  const dispatch = useDispatch()

  const handleApprovalQueueClick = () => {
    console.log("approval")
  }

  const handleOnboardHireClick = () => {
    handleSetOnboardHire(true)
  }

  const handleLogout = () => {
    // dispatch(logout)
  }
  return (
    <section className={styles.background}>
      <SidebarItems cardTitle="Approval Queue" handleOnClick={handleApprovalQueueClick} />
      <SidebarItems cardTitle="Onboard new hire" handleOnClick={handleOnboardHireClick} />
      <SidebarItems cardTitle="Logout" handleOnClick={handleLogout} />
    </section>
  )
}

export default SideBar;