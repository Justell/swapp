import { createFeatureSelector, createSelector } from '@ngrx/store';

import { moviesFeatureKey, State } from '../reducers';
import { movieDetailsKey } from '../reducers/movie-details.reducer';
import { adapter, movieListKey } from '../reducers/movies.reducer';

export const getState = createFeatureSelector<State>(moviesFeatureKey);

export const getMoviesListState = createSelector(
  getState,
  (state) => state && state[movieListKey]
);

export const getMovieDetailsState = createSelector(
  getState,
  (state) => state && state[movieDetailsKey]
);

export const {
  selectAll: getMovies,
  selectEntities: getMoviesEntities,
  selectTotal: getMoviesCount,
} = adapter.getSelectors(getMoviesListState);

export const getLoading = createSelector(
  getMoviesListState,
  (state) => state.loading
);

export const getLoaded = createSelector(
  getMoviesListState,
  (state) => state.loaded
);

export const getError = createSelector(
  getMoviesListState,
  (state) => state.error
);
