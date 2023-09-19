import React from "react";
import { FilterCont } from './Filter.styled';

const Filter = ({filterPerson}) => {
  const handleChangeFilter = ({ target: { value } }) => {
    filterPerson(value);
  };
  return (
    <FilterCont>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChangeFilter}
      />
    </FilterCont>
  );
}

export default Filter
