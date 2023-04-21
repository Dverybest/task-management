export enum Status {
  TODO = "ToDo",
  BLOCKED = "Blocked",
  IN_Progess = "inProgress",
  IN_QA = "inQA",
  DONE = "Done",
  DEPLOYED = "Deployed",
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: Status;
}

export const statusConfig = {
  [Status.TODO]: [Status.TODO, Status.IN_Progess],
  [Status.BLOCKED]: [Status.TODO, Status.BLOCKED],
  [Status.IN_Progess]: [Status.IN_Progess, Status.IN_QA, Status.BLOCKED],
  [Status.IN_QA]: [Status.IN_QA, Status.TODO, Status.DONE],
  [Status.DONE]: [Status.DONE, Status.DEPLOYED],
  [Status.DEPLOYED]: [],
};
