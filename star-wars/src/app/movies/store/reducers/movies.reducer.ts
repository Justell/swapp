import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

import { getIdFromUrl } from '../../../shared/utils';

import { MovieDetailActions, MoviesActions } from '../actions';
import { Movie } from '../../models';

export const movieListKey = 'movies-list';

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  selectId: selectMovieId,
});

export function selectMovieId(movie: Movie): string {
  return getIdFromUrl(movie.url);
}

export interface State extends EntityState<Movie> {
  loading: boolean;
  loaded: boolean;
  error: string | null;
}

export const initialState: State = adapter.getInitialState({
  count: 0,
  loading: false,
  loaded: false,
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(MoviesActions.loadMovies, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(MoviesActions.loadMoviesSuccess, (state, { response: { results } }) =>
    adapter.setAll(results, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),
  on(MoviesActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
  on(MovieDetailActions.loadMovieSuccess, (state, { response: movie }) =>
    adapter.setAll([movie], {
      ...state,
      loading: false,
      loaded: true,
    })
  )
);
