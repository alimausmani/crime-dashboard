import React, { useState, useEffect } from 'react';
import FilterPanel from './FilterPanel';
import CrimeChart from './CrimeChart';

const mockData = [
  { state: 'Delhi', year: '2022', crimeType: 'Theft', count: 120 },
  { state: 'Maharashtra', year: '2022', crimeType: 'Cybercrime', count: 80 },
  { state: 'Delhi', year: '2023', crimeType: 'Cybercrime', count: 60 },
  { state: 'Maharashtra', year: '2023', crimeType: 'Theft', count: 150 },
];

const CrimeDashboard = () => {
  const [filters, setFilters] = useState({ state: 'All', crimeType: 'All', year: 'All' });
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    filterData();
  }, [filters]);

  const filterData = () => {
    let filtered = mockData;

    if (filters.state !== 'All') {
      filtered = filtered.filter(item => item.state === filters.state);
    }

    if (filters.crimeType !== 'All') {
      filtered = filtered.filter(item => item.crimeType === filters.crimeType);
    }

    if (filters.year !== 'All') {
      filtered = filtered.filter(item => item.year === filters.year);
    }

    const chartData = [];
    filtered.forEach(item => {
      const label = `${item.state} (${item.year})`;
      const index = chartData.findIndex(data => data.label === label);

      if (index > -1) {
        chartData[index].value += item.count;
      } else {
        chartData.push({ label, value: item.count });
      }
    });

    setFilteredData(chartData);
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="crime-dashboard">
      <h1>Crime Awareness Dashboard</h1>
      <FilterPanel onFilterChange={handleFilterChange} />
      <CrimeChart chartData={filteredData} />
    </div>
  );
};

export default CrimeDashboard;
