export interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type TaskFilter = "all" | "pending" | "completed";