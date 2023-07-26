import React from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, FilterLabel, FilterInput } from './FilterStyles';

const Filter = ({ filterValue, onFilterChange }) => {
  return (
    <FilterContainer>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" value={filterValue} onChange={onFilterChange} />
    </FilterContainer>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
