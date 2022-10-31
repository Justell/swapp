import { routerReducer as ngrxRouterReducer } from '@ngrx/router-store';

import { State } from './state.model';

export const routerFeatureKey = 'router';

export interface RouterState {
  [routerFeatureKey]: State;
}

export const routerReducer = {
  [routerFeatureKey]: ngrxRouterReducer,
};
