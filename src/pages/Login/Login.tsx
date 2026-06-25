import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./Login.module.scss";
import type { LoginInterface } from "./Login.types";
import { useLoginMutation } from "./Login.services";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../services/getUserData.services";

const ROLE_ROUTES: Record<string, string> = {
  "MANAGER": "/dashboard",
};

const Login = () => {

  const navigate = useNavigate()

  // redux hooks
  const [login, loginState] = useLoginMutation()

  // react hook form 
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInterface>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: "onChange"
  })

  // handlers 
  const onSubmit = async (userData: LoginInterface) => {

    const response = await login(userData);
    localStorage.setItem('accessToken', JSON.stringify(response.data?.accessToken))

    const userDetails = await getUserData();
    console.log(userDetails);
    
    const role = userDetails.role

    navigate(ROLE_ROUTES[role]);
  };

  return (
    <section className={styles.background}>
      <div className={styles.container}>

        {/* heading  */}
        <div className={styles.heading}>
          <h1>Log in</h1>
        </div>


        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>

            {/* validation messages */}
            <div >
              {errors.email &&
                <p className={styles.errorMessage}>
                  {errors.email.message}
                </p>
              }
            </div>

            <Input
              type="email"
              placeholder="Enter email..."
              {...register("email",
                {
                  required: "*Email field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format"
                  }
                })}
            />
          </div>

          <div className={styles.inputGroup}>
            <Input
              type="password"
              placeholder="Enter password..."
              {...register("password",
                {
                  required: "*Password is required",
                })}
            />
            {/* error messages  */}
            <div>
              {errors.password &&
                <p className={styles.errorMessage}>{errors.password.message}</p>
              }
              {loginState.isError &&
                <p className={styles.errorMessage}>{loginState.data?.error.message}</p>
              }
            </div>
          </div>

          <div className={styles.inputGroup}>
            <PrimaryButton>Login</PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login;