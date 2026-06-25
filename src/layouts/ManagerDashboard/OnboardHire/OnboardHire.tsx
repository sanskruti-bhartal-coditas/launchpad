import Input from "../../../components/Input/Input";
import styles from "./OnboardHire.module.scss";
import { useForm } from "react-hook-form";
import type { OnboardHireProps,OnboardHireFormProps } from "./OnboardHire.types";
import { SecondaryButton } from "../../../components/Button/Button";
import { useOnboardHireMutation } from "./OnboardHire.services";

const OnboardHire = ({handleSetOnboardHire}:OnboardHireProps) => {

  //rtk hooks
  const [ onboardHire, onboardHireState] = useOnboardHireMutation()

  // useForm
  const { register, handleSubmit, formState: { errors } } = useForm<OnboardHireFormProps>({
    defaultValues: {
      email: '',
      name: '',
      managerId: '',
      password:'',
      role:''
    },
    mode: "onChange"
  })

  const handleOnSubmit = async(hireData:OnboardHireFormProps) =>{
    console.log(hireData);
    console.log("before");
    
    const response = await onboardHire(hireData);

    console.log("after");
    console.log(response.data);
  }

  const handleCancel = () =>{
    console.log('cancel');
    
    handleSetOnboardHire(false)
  }
  return (
    <section className={styles.background}>
      <form action="" className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
        <div className={styles.heading}>
          <h2>Onboard New Hires</h2>
        </div>

        <div className={styles.inputGroup}>
          <div>
            {errors.email &&
              <p className={styles.errorMessage}>{errors.email.message}</p>
            }
          </div>

          <Input
            type="text"
            placeholder="Enter email..."
            {...register("email",
              {
                required: "*Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format"
                }
              })}
          />

        </div>

        <div className={styles.inputGroup}>
          <div>
            {errors.name && 
              <p className={styles.errorMessage}>{errors.name.message}</p>
            }
          </div>
          <Input
            type="text"
            placeholder="Enter name..."
            {...register("name", { required: "*Name is required" })}
          />
        </div>

        <div className={styles.inputGroup}>
          <div>
            {errors.password && 
              <p className={styles.errorMessage}>{errors.password.message}</p>
            }
          </div>
          <Input
            type="text"
            placeholder="Enter password..."
            {...register("password", { required: "*Password is required" })}
          />
        </div>

        <div className={styles.inputGroup}>
          <div>
            {errors.role && 
              <p className={styles.errorMessage}>{errors.role.message}</p>
            }
          </div>
          <Input
            type="text"
            placeholder="Enter role..."
            {...register("role", { required: "*role is required" })}
          />
        </div>

        <div className={styles.inputGroup}>
            <div>
              {errors.managerId &&
                <p className={styles.errorMessage}>{errors.managerId.message}</p>
              }
            </div>
            <Input
              type="text"
              placeholder="Enter MangerId..."
              {...register("managerId", { required: "*ManagerId is required"})}
            />
        </div>

        <div className={styles.buttonGroup}>
          <SecondaryButton>Save</SecondaryButton>
          <SecondaryButton type="button" onClick={handleCancel}>Cancel</SecondaryButton>
        </div>
      </form>
    </section>
  )
}

export default OnboardHire;