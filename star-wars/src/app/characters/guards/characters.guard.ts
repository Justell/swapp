import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, combineLatest, Observable, of, switchMap } from 'rxjs';

import { CharacterListActions, CharactersSelectors, State } from '../store';

@Injectable()
export class CharactersGuard implements CanActivate {
  constructor(private store: Store<State>) {}

  canActivate(): Observable<boolean> {
    return combineLatest([
      this.store.select(CharactersSelectors.getLoaded),
      this.store.select(CharactersSelectors.getCharactersCount),
    ]).pipe(
      switchMap(([loaded, count]) => {
        if (!loaded || count === 1) {
          this.store.dispatch(CharacterListActions.loadCharacters());
        }

        return of(true);
      }),
      catchError(() => of(false))
    );
  }
}
