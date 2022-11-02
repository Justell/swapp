import { createReducer, on } from '@ngrx/store';

import { CharacterDetailActions } from '../actions';

export const characterDetailsKey = 'character-details';

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
  on(CharacterDetailActions.loadCharacter, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(CharacterDetailActions.loadCharacterSuccess, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(CharacterDetailActions.loadCharacterFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);
