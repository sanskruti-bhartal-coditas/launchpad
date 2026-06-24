import { PrimaryButton } from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <section className={styles.background}>
      <div className={styles.container}>

        {/* heading  */}
        <div className={styles.heading}>
          <h1>Log in</h1>
        </div>

        {/* input fields */}
        <div className={styles.inputGroup}>
          <Input
            type="email"
            placeholder="Enter email..."
          />
          {/* error messages */}
          <div className={styles.errorMessage}>

          </div>
        </div>

        <div className={styles.inputGroup}>
          <Input
            type="password"
            placeholder="Enter password..."
          />
          {/* error messages  */}
          <div>

          </div>
        </div>

        <div className={styles.inputGroup}>
          <PrimaryButton>Login</PrimaryButton>
        </div>
      </div>
    </section>
  )
}

export default Login;