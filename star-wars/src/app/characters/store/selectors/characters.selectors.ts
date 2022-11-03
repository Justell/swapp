import { createFeatureSelector, createSelector } from '@ngrx/store';

import { charactersFeatureKey, State } from '../reducers';
import { adapter, characterListKey } from '../reducers/characters.reducer';

export const getState = createFeatureSelector<State>(charactersFeatureKey);

export const getCharacterListState = createSelector(
  getState,
  (state) => state && state[characterListKey]
);

export const {
  selectAll: getCharacters,
  selectEntities: getCharactersEntities,
  selectTotal: getCharactersCount,
} = adapter.getSelectors(getCharacterListState);

export const getLoading = createSelector(
  getCharacterListState,
  (state) => state.loading
);

export const getLoaded = createSelector(
  getCharacterListState,
  (state) => state.loaded
);

export const getError = createSelector(
  getCharacterListState,
  (state) => state.error
);
