import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { setStatusFilter } from '../../redux/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const filterInputRef = useRef(null);

  const handleFilter = () => {
    const filter = filterInputRef.current.value.toLowerCase();
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.input}
        id="filter"
        type="text"
        name="filter"
        onChange={handleFilter}
        ref={filterInputRef}
      />
    </div>
  );
};

export default Filter;
