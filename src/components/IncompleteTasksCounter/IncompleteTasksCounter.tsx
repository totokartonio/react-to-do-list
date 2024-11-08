type Props = {
  counterLabel: string;
};

const IncompleteTasksCounter = ({ counterLabel }: Props) => {
  return <div className="incompleteTasksCounter">{counterLabel}</div>;
};

export { IncompleteTasksCounter };
