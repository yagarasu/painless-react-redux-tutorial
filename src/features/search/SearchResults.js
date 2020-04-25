import React from 'react';
import './SearchResults.css';

const SearchResults = ({ busy, results }) => {
  const trim = text => text.substr(0, 200)
  return (
    <div className="SearchResults">
      {results.map(({ name, description, html_url: url, owner }) => (
        <div key={name} className="SearchResults-item">
          <h2><a href={url}>{name}</a></h2>
          <h3>Owner: <a href={owner.html_url}>{owner.login}</a></h3>
          <p>{description && trim(description)}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
