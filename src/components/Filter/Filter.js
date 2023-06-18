import React from 'react';
import style from './Filter.module.css';
import PropTypes from 'prop-types';
import { getContactFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactFilter);

  return (
    <div className={style.filter}>
      <label className={style.label}>
        Find contacts by name
        <input
          className={style.input}
          name="filter"
          type="text"
          id="filter"
          value={filter}
          onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  filter: PropTypes.func,
};

export default Filter;
