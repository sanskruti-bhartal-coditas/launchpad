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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<AssignTask>({
    defaultValues: {
      hireId: hireId,
      title: "",
      type: "ACKNOWLEDGEMENT",
      dueAt: "",
      order: 0,
      approverRole: '',
      requiresApproval: false
    }
  });

  const onSubmit = async (data: AssignTask) => {
    setErrorMsg(null);
    try {
      await assignTask({...data , requiresApproval  : true});
      reset()

    } catch (err) {
      setErrorMsg("Failed to assign task. Please try again.");
    }
  };

  return (
    <div className={styles.modalBackDrop}>
      <div className={styles.modal}>

        <div className={styles.header}>
          <h2>Assign Custom Task</h2>
        </div>

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
              {...register("order", { 
                required: "*Order is required",
                valueAsNumber:true
              })}
              />
              {errors.order && <p className={styles.errorMessage}>{errors.order.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="type">Select type</label>
            <select className={styles.select}
              // defaultValue="select-type"
              {...register("type", { required: "*Type is required" })}>
              {/* <option value="select-type" disabled>Select type</option> */}
              <option value="ACKNOWLEDGE">Acknowledgement</option>
              <option value="UPLOAD">Document Upload</option>
              <option value="FORM">Approval Form</option>
              <option value="REQUEST">Request</option>
              <option value="BOOKING">Booking</option>
            </select>
            {errors.type && <p className={styles.errorMessage}>{errors.type.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="dueAt">Due At</label>
            <Input
              type="date"
              {...register("dueAt", { required: "*Due Date is required" })}
            />
            {errors.dueAt && <p className={styles.errorMessage}>{errors.dueAt.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="requiresApproval">Requires Approval</label>
            
            <label htmlFor="">Yes</label>
            <input 
            {...register("requiresApproval")} 
            type="radio" 
            value="true" />

            <label htmlFor="">No</label>
            <input 
            {...register("requiresApproval")}
            type="radio" 
            value="false" />
            {errors.requiresApproval && <p className={styles.errorMessage}>{errors.requiresApproval.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="approverRole">Approver's Role</label>
            <select className={styles.select}
              {...register("approverRole", { required: "*Select approver's role" })}>
              <option value="MANAGER">Manager</option>
              <option value="HR">HR</option>
            </select>
            {errors.approverRole && <p className={styles.errorMessage}>{errors.approverRole.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="config">Config</label>
            <Input
              type="text"
              {...register("config", { required: "*Enter configurations for the hire" })}
            />
            {errors.config && <p className={styles.errorMessage}>{errors.config.message}</p>}
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