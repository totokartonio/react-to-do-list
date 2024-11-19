import { getTasksCounterLabel } from "../../utils";

type Props = {
  count: number;
};

const ActiveTasksCounter = ({ count }: Props) => {
  const label = getTasksCounterLabel(count);
  return <div className="active-tasks-counter">{label}</div>;
};

export { ActiveTasksCounter };
