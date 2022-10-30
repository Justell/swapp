import { createFeatureSelector, createSelector } from '@ngrx/store';

import { routerFeatureKey } from './router.reducer';
import { State } from './state.model';

export const getRouterState = createFeatureSelector<State>(routerFeatureKey);

export const getRouterReducerState = createSelector(
  getRouterState,
  (state) => state && state.state
);

export const getParams = createSelector(
  getRouterReducerState,
  (state) => state.params
);
