import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

import { CharactersService } from '../../services/characters.service';
import { CharacterDetailActions, CharacterListActions } from '../actions';

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
          catchError(() =>
            of(
              CharacterListActions.loadCharactersFailure({
                error: 'Something went wrong! Please try again later',
              })
            )
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

  loadCharacterDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterDetailActions.loadCharacter),
      switchMap(({ id }) => {
        return this.charactersService
          .getCharacter(id)
          .pipe(
            map((response) =>
              CharacterDetailActions.loadCharacterSuccess({ response })
            )
          );
      })
    )
  );
}
