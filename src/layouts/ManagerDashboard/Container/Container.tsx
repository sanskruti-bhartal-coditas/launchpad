import styles from "./Container.module.scss";
import type { ContainerProps } from "./Container.types";
import OnboardHire from "../OnboardHire/OnboardHire"

const Container = ({onboardState,handleSetOnboardHire}:ContainerProps) => {
  return(
    <section className={styles.container}>
      {
        onboardState && <OnboardHire />
      }
    </section>
  )
}

export default Container;