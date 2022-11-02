import { createSelector } from '@ngrx/store';

import { getCharactersEntities } from '../../../characters/store/selectors/characters.selectors';
import { RouterSelectors } from '../../../shared/router-store';
import { getIdFromUrl } from '../../../shared/utils';
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

export const getMovieCharacters = createSelector(
  getMovie,
  getCharactersEntities,
  (movie, chars) =>
    movie?.characters.map((char) => {
      const charResourceID = getIdFromUrl(char);
      const name = chars[charResourceID]?.name;
      return { id: charResourceID, name: name || '' };
    })
);
