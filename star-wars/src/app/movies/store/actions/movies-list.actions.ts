import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { ResponseList } from '../../../shared/models';
import { Movie } from '../../models';

export const MoviesActions = createActionGroup({
  source: 'Movies/List',
  events: {
    'Load Movies': emptyProps(),
    'Load Movies Success': props<{ results: Movie[] }>(),
    'Load Movies Failure': props<{ error: string }>(),
    'Navigate To Movie Details': props<{ id: string }>(),
  },
});
