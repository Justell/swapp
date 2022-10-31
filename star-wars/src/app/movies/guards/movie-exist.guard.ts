import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, Observable, of, switchMap } from 'rxjs';

import { MovieDetailActions, MovieDetailsSelectors, State } from '../store';

@Injectable()
export class MovieExistGuard implements CanActivate {
  constructor(private store: Store<State>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(MovieDetailsSelectors.getMovie).pipe(
      switchMap((movie) => {
        if (!movie) {
          this.store.dispatch(MovieDetailActions.loadMovie({ id: '1' }));
        }

        return of(true);
      }),
      catchError(() => of(false))
    );
  }
}
