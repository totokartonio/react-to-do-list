import { getTasksCounterLabel } from "../../utils";

type Props = {
  count: number;
};

const IncompleteTasksCounter = ({ count }: Props) => {
  const label = getTasksCounterLabel(count);
  return <div className="incompleteTasksCounter">{label}</div>;
};

export { IncompleteTasksCounter };
