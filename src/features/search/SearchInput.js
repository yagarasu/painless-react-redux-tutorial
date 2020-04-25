import React from 'react';
import './SearchInput.css';

function SearchInput ({ busy, onSubmit, value, onChange }) {
  const icon = busy ? <span role="img" aria-label="Loading">💤</span> : <span role="img" aria-label="Search">🔍</span>
  const hndKeyUp = e => {
    if (e.keyCode === 13) {
      onSubmit(value)
    }
  }
  const hndClick = e => {
    onSubmit(value)
  }
  const hndChange = e => {
    onChange(e.target.value)
  }
  return (
    <div className="SearchInput">
      <input disabled={busy} onChange={hndChange} onKeyUp={hndKeyUp} />
      <button type="submit" disabled={busy} onClick={hndClick}>{icon}</button>
    </div>
  );
}

export default SearchInput;
