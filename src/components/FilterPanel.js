import React from 'react';

const FilterPanel = ({ onFilterChange }) => {
  return (
    <div className="filter-panel">
      <label>
        Select State:  
        <select onChange={(e) => onFilterChange('state', e.target.value)}>
          <option value="All">All</option>
          <option value="Delhi">Delhi</option>
          <option value="Maharashtra">Maharashtra</option>
        </select>
      </label>

      <label>
        Select Crime Type:  
        <select onChange={(e) => onFilterChange('crimeType', e.target.value)}>
          <option value="All">All</option>
          <option value="Theft">Theft</option>
          <option value="Cybercrime">Cybercrime</option>
        </select>
      </label>

      <label>
        Select Year:  
        <select onChange={(e) => onFilterChange('year', e.target.value)}>
          <option value="All">All</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </label>
    </div>
  );
};

export default FilterPanel;
