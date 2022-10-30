import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Movie } from '../../models';

export const MovieDetailActions = createActionGroup({
  source: 'Movies/Detail',
  events: {
    'Load Movie': props<{ id: string }>(),
    'Load Movie Success': props<{ response: Movie }>(),
    'Load Movie Failure': props<{ error: string }>(),
  },
});
