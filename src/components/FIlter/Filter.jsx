import React from 'react';
import css from './Filter.module.css';
import { setFilter } from 'redux/authReducer';
import { useDispatch, useSelector } from 'react-redux';
const Filter = () => {
  const value = useSelector(state => state.contacts.filterValue);
  const dispatch = useDispatch();
  const onFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <div className={css.filter}>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        className={css.input}
        type="text"
        maxLength={20}
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
};
export default Filter;
