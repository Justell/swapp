import { createReducer, on } from '@ngrx/store';

import { MovieDetailActions } from '../actions';

export const movieDetailsKey = 'movie-details';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: string | null;
}

export const initialState: State = {
  loading: false,
  loaded: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(MovieDetailActions.loadMovie, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(MovieDetailActions.loadMovieSuccess, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(MovieDetailActions.loadMovieFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);
