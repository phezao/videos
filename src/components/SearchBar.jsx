import React, { useState } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label htmlFor="">Video search</label>
            <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
          </div>
        </form>
      </div>
    )
}

export default SearchBar;