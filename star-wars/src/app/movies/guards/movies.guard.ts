import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, combineLatest, Observable, of, switchMap } from 'rxjs';

import {
  CharacterListActions,
  CharactersSelectors,
} from '../../characters/store';
import { MoviesActions, MoviesSelectors, State } from '../store';

@Injectable()
export class MoviesGuard implements CanActivate {
  constructor(private store: Store<State>) {}

  canActivate(): Observable<boolean> {
    return combineLatest([
      this.store.select(MoviesSelectors.getLoaded),
      this.store.select(MoviesSelectors.getMoviesCount),
      this.store.select(CharactersSelectors.getLoaded),
    ]).pipe(
      switchMap(([moviesLoaded, moviesCount, charsLoaded]) => {
        if (!moviesLoaded || moviesCount === 1) {
          this.store.dispatch(MoviesActions.loadMovies());
        }
        if (!charsLoaded) {
          this.store.dispatch(CharacterListActions.loadCharacters());
        }

        return of(true);
      }),
      catchError(() => of(false))
    );
  }
}
