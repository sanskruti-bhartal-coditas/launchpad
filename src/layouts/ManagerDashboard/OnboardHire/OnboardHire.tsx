import Input from "../../../components/Input/Input";
import styles from "./OnboardHire.module.scss";
import { useForm } from "react-hook-form";
import type { OnboardHireFormProps } from "./OnboardHire.types";
import { SecondaryButton } from "../../../components/Button/Button";
import { useOnboardHireMutation } from "./OnboardHire.services";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { useState } from "react";

const OnboardHire = () => {

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const navigate = useNavigate()

  const currentUser = useSelector((state: RootState) => state.auth.user);
  console.log("Current User Data:", currentUser);

  //rtk hooks
  const [onboardHire, onboardHireState] = useOnboardHireMutation()

  // useForm
  const { register, handleSubmit, reset, formState: { errors } } = useForm<OnboardHireFormProps>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      role: '',
      managerId: '',
    },
    mode: "onChange"
  })

  const handleOnSubmit = async (hireData: OnboardHireFormProps) => {
    // to clear old errors before submitting
    setSubmitError(null);
    setSuccessMessage(null);
    try {
      const payload = {
        ...hireData,
        managerId: currentUser?.id
      };

      await onboardHire(payload).unwrap();

      setSuccessMessage("New hire onboarded successfully!");

      reset()


    } catch (error: any) {
      setSubmitError("Failed to onboard new hire. Please try again.");
    }
  }

  const handleCancel = () => {
    navigate("/dashboard");
  }
  return (
    <section className={styles.background}>
      <form action="" className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
        <div className={styles.heading}>
          <h2>Onboard New Hires</h2>
          {successMessage && (
            <p className={styles.successMessage}>
              {successMessage}
            </p>
          )}
          {submitError && (
            <p className={styles.errorMessage}>
              {submitError}
            </p>
          )}
        </div>

        <div className={styles.inputGroup}>
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
           <div>
            {errors.email &&
              <p className={styles.errorMessage}>{errors.email.message}</p>
            }
          </div>

        </div>

        <div className={styles.inputGroup}>
        
          <Input
            type="text"
            placeholder="Enter name..."
            {...register("name", { required: "*Name is required" })}
          />

          <div>
            {errors.name &&
              <p className={styles.errorMessage}>{errors.name.message}</p>
            }
          </div>
        </div>

        <div className={styles.inputGroup}>
          
          <Input
            type="password"
            placeholder="Enter password..."
            {...register("password", { required: "*Password is required" })}
          />

          <div>
            {errors.password &&
              <p className={styles.errorMessage}>{errors.password.message}</p>
            }
          </div>
        </div>

        <div className={styles.inputGroup}>

          <select className={styles.select} 
            defaultValue="select-role"
          {...register("role", {
            required:"*Pick a role"
          })}
          >
            <option value="select-role" disabled>Select Role:</option>
            <option value="NEW_HIRE">New Hire</option>
            <option value="MANAGER">Manager</option>
            <option value="HR">HR</option>
          </select>

          <div>
            {errors.role &&
              <p className={styles.errorMessage}>{errors.role.message}</p>
            }
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <SecondaryButton type="submit" disabled={onboardHireState.isLoading}>
            {onboardHireState.isLoading ? "Saving..." : "Save"}
          </SecondaryButton>
          <SecondaryButton type="button" onClick={handleCancel}>Cancel</SecondaryButton>
        </div>
      </form>
    </section>
  )
}

export default OnboardHire;