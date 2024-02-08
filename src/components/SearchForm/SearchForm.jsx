import { useEffect, useRef, useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const checkboxRef = useRef();

  useEffect(() => {
    const queryLs = localStorage.getItem('query');
    const checked = localStorage.getItem('checked');

    if (queryLs) {
      setQuery(queryLs);
    }

    if (checked) {
      if (checked === 'true') {
        checkboxRef.current.checked = true;
      } else {
        checkboxRef.current.checked = false;
      }
    }
  }, []);

  const handleCheckbox = (e) => {
    localStorage.setItem('checked', e.target.checked);
  };

  const handleSearchInput = (e) => {
    localStorage.setItem('query', e.target.value);
    setQuery(e.target.value);
  };

  return (
    <form className='search-form' onSubmit={onSubmit}>
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
        <button className='search-form__submit-btn' type='submit' />
      </div>
      <label className='search-form__label'>
        <input
          ref={checkboxRef}
          className='search-form__checkbox'
          name='checkbox'
          type='checkbox'
          onChange={handleCheckbox}
        />
        <span className='search-form__label-text'>Короткометражки</span>
      </label>
    </form>
  );
};

export default SearchForm;
