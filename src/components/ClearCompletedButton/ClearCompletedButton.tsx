type Props = {
  onClick: () => void;
};

const ClearCompletedButton = ({ onClick }: Props) => {
  return (
    <button type="button" className="clear-completed" onClick={onClick}>
      Clear completed tasks
    </button>
  );
};

export { ClearCompletedButton };
