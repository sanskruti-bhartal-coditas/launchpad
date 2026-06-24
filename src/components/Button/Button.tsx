import type { ButtonProps } from "./Button.types"
import styles from "./Button.module.scss"


export const Button = ({children, className, ...props}:ButtonProps) =>{
  return(
    <button className={[styles.button, className].join(" ")} {...props}>
      {children}
    </button>
  )
}

export const PrimaryButton = (props: ButtonProps) => {
    return <Button {...props} className={styles.primaryButton}></Button>
}

export const SecondaryButton = (props: ButtonProps) => {
    return <Button {...props} className={styles.secondaryButton}></Button>
}

export const TertiaryButton = (props: ButtonProps) =>{
  return <Button {...props} className={styles.tertiaryButton}></Button>
}

export const DeleteButton = (props: ButtonProps) =>{
  return <Button {...props} className={styles.deleteButton}></Button>
}
