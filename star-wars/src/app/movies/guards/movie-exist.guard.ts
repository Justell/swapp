import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, Observable, of, switchMap } from 'rxjs';

import { MovieDetailsSelectors, State } from '../store';

@Injectable()
export class MovieExistGuard implements CanActivate {
  constructor(private store: Store<State>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(MovieDetailsSelectors.getMovie).pipe(
      switchMap((movie) => {
        if (!movie) {
          this.router.navigate(['/home']);
        }

        return of(true);
      }),
      catchError(() => of(false))
    );
  }
}
