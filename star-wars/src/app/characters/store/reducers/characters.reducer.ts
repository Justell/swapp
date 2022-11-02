import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

import { getIdFromUrl } from '../../../shared/utils';

import { CharacterDetailActions, CharacterListActions } from '../actions';
import { Character } from '../../models';

export const characterListKey = 'character-list';

export const adapter: EntityAdapter<Character> = createEntityAdapter<Character>(
  {
    selectId: selectCharacterId,
  }
);

export function selectCharacterId(character: Character): string {
  return getIdFromUrl(character.url);
}

export interface State extends EntityState<Character> {
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
  on(CharacterListActions.loadCharacters, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(CharacterListActions.loadCharactersSuccess, (state, { results }) =>
    adapter.setAll(results, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),
  on(CharacterListActions.loadCharactersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
  on(
    CharacterDetailActions.loadCharacterSuccess,
    (state, { response: character }) =>
      adapter.setAll([character], {
        ...state,
        loading: false,
        loaded: true,
      })
  )
);
