import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FilterContainer = styled.label`
  display: block;
  width: 400px;
  margin-bottom: 10px;
`;

const FilterLabel = styled.span`
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
`;

const FilterInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

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
