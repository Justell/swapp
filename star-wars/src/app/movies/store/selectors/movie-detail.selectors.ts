import { createSelector } from '@ngrx/store';
import { RouterSelectors } from 'src/app/shared/router-store';
import { getMovieDetailsState, getMoviesEntities } from './movies.selectors';

export const getMovieLoading = createSelector(
  getMovieDetailsState,
  (state) => state.loading
);

export const getMovieLoaded = createSelector(
  getMovieDetailsState,
  (state) => state.loaded
);

export const getMovieError = createSelector(
  getMovieDetailsState,
  (state) => state.error
);

export const getParamsId = createSelector(
  RouterSelectors.getParams,
  (params) => params && params['id']
);

export const getMovie = createSelector(
  getMoviesEntities,
  getParamsId,
  (entities, id) => entities[id]
);
