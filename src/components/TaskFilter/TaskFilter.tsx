import React from "react";
type Props = {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
};

const TaskFilter = ({ selectedFilter, onFilterChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  return (
    <select className="filter" value={selectedFilter} onChange={handleChange}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="active">Active</option>
    </select>
  );
};

export { TaskFilter };
