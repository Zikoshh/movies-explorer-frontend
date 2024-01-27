import { useState } from 'react';
import './SearchForm.css';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = () => {};

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='search-form__container'>
        <input
          name='search'
          className='search-form__input'
          type='search'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Фильм'
          required
        />
        <button className='search-form__submit-btn' type='submit' />
      </div>
      <label className='search-form__label'>
        <input
          className='search-form__checkbox'
          name='short-films'
          type='checkbox'
        />
        <span className='search-form__label-text'>Короткометражки</span>
      </label>
    </form>
  );
};

export default SearchForm;
