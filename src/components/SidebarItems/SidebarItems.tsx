import type { SidebarItemsProps } from "./Sidebar.types";
import styles from "./SidebarItems.module.scss";

const SidebarItems = ({cardTitle, handleOnClick}:SidebarItemsProps) =>{
  return(
    <section className={styles.sideBarItem} onClick={handleOnClick}>
      <p>{cardTitle}</p>
    </section>
  )
}

export default SidebarItems;