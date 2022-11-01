import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

import { CharactersService } from '../../services/characters.service';
import { CharacterListActions } from '../actions';

@Injectable()
export class CharactersEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private charactersService: CharactersService
  ) {}

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterListActions.loadCharacters),
      switchMap(() => {
        return this.charactersService.getCharacters().pipe(
          map((results) =>
            CharacterListActions.loadCharactersSuccess({ results })
          ),
          catchError((error) =>
            of(CharacterListActions.loadCharactersFailure(error))
          )
        );
      })
    )
  );

  goToCharacterDetails$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CharacterListActions.navigateToCharacterDetails),
        tap(({ id }) => this.router.navigate(['/characters', id]))
      ),
    { dispatch: false }
  );
}
