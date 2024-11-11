type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

enum FilterValues {
  All = "all",
  Completed = "completed",
  Active = "active",
}

export type { Task };
export { FilterValues };
