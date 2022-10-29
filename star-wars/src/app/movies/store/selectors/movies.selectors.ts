import { createFeatureSelector, createSelector } from '@ngrx/store';

import { moviesFeatureKey, State } from '../reducers/movies.reducer';

export const getState = createFeatureSelector<State>(moviesFeatureKey);

export const getMovies = createSelector(getState, (state) => state.movies);
