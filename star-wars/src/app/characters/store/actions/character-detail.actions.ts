import { createActionGroup, props } from '@ngrx/store';

import { Character } from '../../models';

export const CharacterDetailActions = createActionGroup({
  source: 'Character/Detail',
  events: {
    'Load Character': props<{ id: string }>(),
    'Load Character Success': props<{ response: Character }>(),
    'Load Character Failure': props<{ error: string }>(),
  },
});
