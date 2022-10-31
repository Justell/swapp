import { ActionReducerMap } from '@ngrx/store';
import * as MovieDetailsReducer from './movie-details.reducer';
import * as MoviesListReducer from './movies.reducer';

export const moviesFeatureKey = 'movies';

export interface State {
  [MoviesListReducer.movieListKey]: MoviesListReducer.State;
  [MovieDetailsReducer.movieDetailsKey]: MovieDetailsReducer.State;
}

export const initialState: State = {
  [MoviesListReducer.movieListKey]: MoviesListReducer.initialState,
  [MovieDetailsReducer.movieDetailsKey]: MovieDetailsReducer.initialState,
};

export const reducers: ActionReducerMap<State> = {
  [MoviesListReducer.movieListKey]: MoviesListReducer.reducer,
  [MovieDetailsReducer.movieDetailsKey]: MovieDetailsReducer.reducer,
};
