import React from "react";
import { FilterValues } from "../../types";

type Props = {
  selectedFilter: FilterValues;
  onFilterChange: (filter: FilterValues) => void;
};

const TaskFilter = ({ selectedFilter, onFilterChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value as FilterValues);
  };

  return (
    <select className="filter" value={selectedFilter} onChange={handleChange}>
      <option value={FilterValues.All}>All</option>
      <option value={FilterValues.Completed}>Completed</option>
      <option value={FilterValues.Active}>Active</option>
    </select>
  );
};

export { TaskFilter };
