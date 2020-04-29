import { createSlice } from '@reduxjs/toolkit';
import GithubApi from 'services/GithubApi';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    results: [],
    busy: false,
    error: null
  },
  reducers: {
    setQuery: (state, { payload }) => {
      state.query = payload
    },
    load: state => {
      state.results = [];
      state.busy = true;
      state.error = null;
    },
    success: (state, { payload }) => {
      state.results = payload;
      state.busy = false;
      state.error = null;
    },
    error: (state, { payload }) => {
      state.results = [];
      state.busy = false;
      state.error = payload;
    },
  },
});

export const { setQuery, load, success, error } = searchSlice.actions;

export const request = query => async dispatch => {
  dispatch(load())
  try {
    const results = await GithubApi.search(query)
    return dispatch(success(results))
  } catch (e) {
    dispatch(error(e.message))
  }
};

export const selectQuery = state => state.search.query;
export const selectResults = state => state.search.results;
export const selectBusy = state => state.search.busy;
export const selectError = state => state.search.error;

export default searchSlice.reducer;
