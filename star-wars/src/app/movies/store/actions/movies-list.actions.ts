import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { ResponseList } from '../../../shared/models';
import { Movie } from '../../models';

export const MoviesActions = createActionGroup({
  source: 'Movies',
  events: {
    'Load Movies': emptyProps(),
    'Load Movies Success': props<{ response: ResponseList<Movie> }>(),
    'Load Movies Failure': props<{ error: string }>(),
  },
});
