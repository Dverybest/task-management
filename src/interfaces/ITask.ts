export enum Status {
  TODO = "Todo",
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
