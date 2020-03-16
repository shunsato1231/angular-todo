export interface Task {
  id: number;
  comment: string;
  status: status;
}

export type status = 'new' | 'wip'| 'done' | 'pending'