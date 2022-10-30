import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, combineLatest, Observable, of, switchMap } from 'rxjs';

import { MoviesActions, MoviesSelectors, State } from '../store';

@Injectable()
export class MoviesGuard implements CanActivate {
  constructor(private store: Store<State>) {}

  canActivate(): Observable<boolean> {
    return combineLatest([
      this.store.select(MoviesSelectors.getLoaded),
      this.store.select(MoviesSelectors.getMoviesCount),
    ]).pipe(
      switchMap(([loaded, count]) => {
        if (!loaded || count === 1) {
          this.store.dispatch(MoviesActions.loadMovies());
        }

        return of(true);
      }),
      catchError(() => of(false))
    );
  }
}
