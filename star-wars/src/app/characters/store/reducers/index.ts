import { ActionReducerMap } from '@ngrx/store';

import * as CharacterListReducer from './characters.reducer';

export const charactersFeatureKey = 'characters';

export interface State {
  [CharacterListReducer.characterListKey]: CharacterListReducer.State;
}

export const initialState: State = {
  [CharacterListReducer.characterListKey]: CharacterListReducer.initialState,
};

export const reducers: ActionReducerMap<State> = {
  [CharacterListReducer.characterListKey]: CharacterListReducer.reducer,
};
