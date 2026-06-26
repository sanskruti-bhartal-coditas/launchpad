import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./AssignTaskModal.module.scss";
import Input from "../../../components/Input/Input";
import { PrimaryButton, SecondaryButton } from "../../../components/Button/Button";
import { useAssignTaskMutation } from "../NewHireStats/NewHireStats.service";
import type { AssignTask } from "./AssignTaskModal.types";

interface AssignTaskModalProps {
  hireId: string;
  onClose: () => void;
}

const AssignTaskModal = ({ hireId, onClose }: AssignTaskModalProps) => {
  const [assignTask, { isLoading }] = useAssignTaskMutation();
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<AssignTask>({
    defaultValues: {
      hireId: hireId, 
      title: "",
      type: "ACKNOWLEDGEMENT",
      dueAt: "",
      order:0,
      approverRole:'',
      requiresApproval:false
    }
  });

  const onSubmit = async (data: AssignTask) => {
    setErrorMsg(null);
    try {
      await assignTask(data).unwrap();
      setSuccessMsg("Task assigned successfully!");
      
      setTimeout(() => {
        reset();
        onClose();
      }, 1500);

    } catch (err) {
      setErrorMsg( "Failed to assign task. Please try again.");
    }
  };

  return (
    <div className={styles.modalBackDrop}>
      <div className={styles.modal}>
        
        <div className={styles.header}>
          <h2>Assign Custom Task</h2>
        </div>

        {successMsg && <p className={styles.successMessage}>{successMsg}</p>}
        {errorMsg && <p className={styles.errorMessage}>{errorMsg}</p>}

        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="title">Task title</label>
            <Input
              type="text"
              placeholder="Task Title"
              {...register("title", { required: "*Title is required" })}
            />
            {errors.title && <p className={styles.errorMessage}>{errors.title.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="order">Order</label>
            <Input
              type="number"
              placeholder="Order"
              {...register("order", { required: "*Description is required" })}
            />
            {errors.order && <p className={styles.errorMessage}>{errors.order.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="type">Select</label>
            <select className={styles.select} 
            // defaultValue="select-type"
            {...register("type", { required: "*Type is required" })}>
              {/* <option value="select-type" disabled>Select type</option> */}
              <option value="ACKNOWLEDGEMENT">Acknowledgement</option>
              <option value="UPLOAD">Document Upload</option>
              <option value="FORM">Approval Form</option>
            </select>
            {errors.type && <p className={styles.errorMessage}>{errors.type.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="dueAt">Due At :</label>
            <Input
              type="date"
              {...register("dueAt", { required: "*Due Date is required" })}
            />
            {errors.dueAt && <p className={styles.errorMessage}>{errors.dueAt.message}</p>}
          </div>

          <div className={styles.buttonGroup}>
             <SecondaryButton type="button" onClick={onClose}>Cancel</SecondaryButton>
             <PrimaryButton type="submit" disabled={isLoading}>
               {isLoading ? "Saving..." : "Assign Task"}
             </PrimaryButton>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AssignTaskModal;