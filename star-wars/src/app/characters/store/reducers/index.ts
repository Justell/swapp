import { ActionReducerMap } from '@ngrx/store';

import * as CharacterListReducer from './characters.reducer';
import * as CharacterDetailReducer from './character-details.reducer';

export const charactersFeatureKey = 'characters';

export interface State {
  [CharacterListReducer.characterListKey]: CharacterListReducer.State;
  [CharacterDetailReducer.characterDetailsKey]: CharacterDetailReducer.State;
}

export const initialState: State = {
  [CharacterListReducer.characterListKey]: CharacterListReducer.initialState,
  [CharacterDetailReducer.characterDetailsKey]:
    CharacterDetailReducer.initialState,
};

export const reducers: ActionReducerMap<State> = {
  [CharacterListReducer.characterListKey]: CharacterListReducer.reducer,
  [CharacterDetailReducer.characterDetailsKey]: CharacterDetailReducer.reducer,
};
