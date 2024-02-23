import { useEffect, useRef, useState } from 'react';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';

const SearchForm = ({ onSubmit, handleCheckbox, formToBeDisabled }) => {
  const [query, setQuery] = useState('');
  const checkboxRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/movies') {
      const queryLs = localStorage.getItem('query');
      const checkboxState = JSON.parse(localStorage.getItem('checkboxState'));

      if (queryLs) {
        setQuery(queryLs);
      }

      if (checkboxState) {
        if (checkboxState === true) {
          checkboxRef.current.checked = true;
        } else {
          checkboxRef.current.checked = false;
        }
      }
    }
  }, [location]);

  const onCheckboxChanged = (e) => {
    if (location.pathname === '/movies') {
      localStorage.setItem('checkboxState', JSON.stringify(e.target.checked));
    }
    checkboxRef.current.checked = e.target.checked;
    handleCheckbox(e.target.checked, query);
  };

  const handleSearchInput = (e) => {
    if (location.pathname === '/movies') {
      localStorage.setItem('query', e.target.value);
    }
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query, checkboxRef.current.checked);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='search-form__container'>
        <input
          onChange={handleSearchInput}
          value={query || ''}
          name='search'
          className='search-form__input'
          type='search'
          placeholder='Фильм'
          required
        />
        <button
          className='search-form__submit-btn'
          type='submit'
          disabled={formToBeDisabled ? true : false}
        />
      </div>
      <label className='search-form__label'>
        <input
          ref={checkboxRef}
          className='search-form__checkbox'
          name='checkbox'
          type='checkbox'
          onChange={onCheckboxChanged}
        />
        <span className='search-form__label-text'>Короткометражки</span>
      </label>
    </form>
  );
};

export default SearchForm;
