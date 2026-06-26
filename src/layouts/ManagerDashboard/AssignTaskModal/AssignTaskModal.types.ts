export interface AssignTask {
  hireId?: string;
  title: string;
  order:number,
  type: "ACKNOWLEDGEMENT" | "UPLOAD" | "FORM";
  dueAt: string;
  config: string,
  requiresApproval:boolean,
  approverRole:string
}