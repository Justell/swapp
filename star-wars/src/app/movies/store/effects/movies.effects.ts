import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { MoviesService } from '../../services/movies.service';
import { MoviesActions } from '../actions';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private moviesService: MoviesService
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      switchMap(() => {
        return this.moviesService.getMovies().pipe(
          map((response) => MoviesActions.loadMoviesSuccess({ response })),
          catchError((error) => of(MoviesActions.loadMoviesFailure(error)))
        );
      })
    )
  );
}
