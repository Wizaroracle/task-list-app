export type Priority = "low" | "medium" | "high";
export type Status = "todo" | "in-progress" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  createdAt: number;
  updatedAt: number;
}

export interface TaskFilters {
  search: string;
  status: Status | "all";
  priority: Priority | "all";
  category: string;
}
