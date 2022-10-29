import { createReducer, on } from '@ngrx/store';

import { MoviesActions } from '../actions';
import { Movie } from '../../models';

export const moviesFeatureKey = 'movies-list';

export interface State {
  movies: Movie[] | null;
  count: number | null;
  loading: boolean;
  loaded: boolean;
  error: string | null;
}

export const initialState: State = {
  movies: null,
  count: null,
  loading: false,
  loaded: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(MoviesActions.loadMovies, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
    movies: null,
    count: null,
  })),
  on(
    MoviesActions.loadMoviesSuccess,
    (state, { response: { results, count } }) => ({
      ...state,
      loading: false,
      loaded: true,
      movies: results,
      count,
    })
  ),
  on(MoviesActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);
