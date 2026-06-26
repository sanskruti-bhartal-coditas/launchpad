import { useDispatch } from "react-redux";
import SidebarItems from "../../../components/SidebarItems/SidebarItems";
import styles from "./SideBar.module.scss"
import { logout } from "../../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const SideBar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleApprovalQueueClick = () => {
    console.log("approval")
  }

  const handleOnboardHireClick = () => {
    navigate("/dashboard/onboard-new-hire")
  }

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('role')
    localStorage.removeItem('accessToken')
    navigate("/")
  }

  const handleHireStats = () =>{
    navigate("/dashboard/new-hire-stats")
  }
  return (
    <nav className={styles.background}>
      <SidebarItems cardTitle="Approval Queue" 
      handleOnClick={handleApprovalQueueClick} />
      <SidebarItems cardTitle="Onboard New Hire" handleOnClick={handleOnboardHireClick} />
      <SidebarItems cardTitle="New Hire Stats " handleOnClick={handleHireStats} />
      <SidebarItems cardTitle="Logout" handleOnClick={handleLogout} />
    </nav>
  )
}

export default SideBar;