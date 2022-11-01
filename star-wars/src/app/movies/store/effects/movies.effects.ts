import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { MoviesService } from '../../services/movies.service';
import { MovieDetailActions, MoviesActions } from '../actions';
import { Router } from '@angular/router';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store,
    private moviesService: MoviesService
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      switchMap(() => {
        return this.moviesService.getMovies().pipe(
          tap((res) => console.log('res', res)),
          map((response) => MoviesActions.loadMoviesSuccess({ response })),
          catchError((error) => of(MoviesActions.loadMoviesFailure(error)))
        );
      })
    )
  );

  goToMovieDetails$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MoviesActions.navigateToMovieDetails),
        tap(({ id }) => this.router.navigate(['/movies', id]))
      ),
    { dispatch: false }
  );

  loadMovieDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieDetailActions.loadMovie),
      switchMap(({ id }) => {
        return this.moviesService
          .getMovie(id)
          .pipe(
            map((response) => MovieDetailActions.loadMovieSuccess({ response }))
          );
      })
    )
  );
}
