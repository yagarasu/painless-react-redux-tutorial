import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchInput from 'features/search/SearchInput';
import SearchResults from 'features/search/SearchResults';
import { selectQuery, setQuery, request, selectResults, selectBusy } from 'features/search/searchSlice';

const SearchPage = () => {
  const query = useSelector(selectQuery);
  const results = useSelector(selectResults);
  const busy = useSelector(selectBusy);
  const dispatch = useDispatch();
  const hndChange = query => dispatch(setQuery(query))
  const hndSubmit = query => dispatch(request(query))
  return (
    <div>
      <SearchInput onSubmit={hndSubmit} onChange={hndChange} value={query} busy={busy} />
      <SearchResults results={results} busy={busy} />
    </div>
  );
}

export default SearchPage;
