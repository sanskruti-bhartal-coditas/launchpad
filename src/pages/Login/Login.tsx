import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./Login.module.scss";
import type { LoginInterface } from "./Login.types";
import { useLoginMutation } from "./Login.services";

const Login = () => {

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
  const onSubmit = async(data:LoginInterface) => {
    const response = await login(data)
    console.log(response.data)

    //store accesstoken here
  }

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
                  maxLength: {
                    value: 6,
                    message: "*Minimum password length is 6"
                  }
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