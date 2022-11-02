import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, combineLatest, Observable, of, switchMap } from 'rxjs';

import { MoviesActions, MoviesSelectors } from '../../movies/store';
import { CharacterListActions, CharactersSelectors, State } from '../store';

@Injectable()
export class CharactersGuard implements CanActivate {
  constructor(private store: Store<State>) {}

  canActivate(): Observable<boolean> {
    return combineLatest([
      this.store.select(CharactersSelectors.getLoaded),
      this.store.select(CharactersSelectors.getCharactersCount),
      this.store.select(MoviesSelectors.getLoaded),
    ]).pipe(
      switchMap(([charsLoaded, charCount, moviesLoaded]) => {
        if (!charsLoaded || charCount === 1) {
          this.store.dispatch(CharacterListActions.loadCharacters());
        }
        if (!moviesLoaded) {
          this.store.dispatch(MoviesActions.loadMovies());
        }

        return of(true);
      }),
      catchError(() => of(false))
    );
  }
}
