import { createSelector } from '@ngrx/store';

import { getIdFromUrl } from '../../../shared/utils';
import { RouterSelectors } from '../../../shared/router-store';
import { getMoviesEntities } from '../../../movies/store/selectors/movies.selectors';
import { characterDetailsKey } from '../reducers/character-details.reducer';
import { getCharactersEntities, getState } from './characters.selectors';

export const getCharacterDetailsState = createSelector(
  getState,
  (state) => state && state[characterDetailsKey]
);

export const getCharacterLoading = createSelector(
  getCharacterDetailsState,
  (state) => state.loading
);

export const getCharacterLoaded = createSelector(
  getCharacterDetailsState,
  (state) => state.loaded
);

export const getCharacterError = createSelector(
  getCharacterDetailsState,
  (state) => state.error
);

export const getParamsId = createSelector(
  RouterSelectors.getParams,
  (params) => params && params['id']
);

export const getCharacter = createSelector(
  getCharactersEntities,
  getParamsId,
  (entities, id) => {
    return entities[id];
  }
);

export const getCharacterMovies = createSelector(
  getCharacter,
  getMoviesEntities,
  (char, movies) =>
    char?.films.map((film) => {
      const filmResourceID = getIdFromUrl(film);
      const title = movies[filmResourceID]?.title;
      return { id: filmResourceID, name: title || '' };
    })
);
