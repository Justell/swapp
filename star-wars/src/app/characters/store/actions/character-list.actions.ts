import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Character } from '../../models';

export const CharacterListActions = createActionGroup({
  source: 'Characters/List',
  events: {
    'Load Characters': emptyProps(),
    'Load Characters Success': props<{ results: Character[] }>(),
    'Load Characters Failure': props<{ error: string }>(),
    'Navigate To Character Details': props<{ id: string }>(),
  },
});
