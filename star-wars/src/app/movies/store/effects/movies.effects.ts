import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { MoviesService } from '../../services/movies.service';
import { MovieDetailActions, MoviesActions } from '../actions';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private moviesService: MoviesService
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      switchMap(() => {
        return this.moviesService.getMovies().pipe(
          map(({ results }) => MoviesActions.loadMoviesSuccess({ results })),
          catchError(() =>
            of(
              MoviesActions.loadMoviesFailure({
                error: 'Something went wrong! Please try again later',
              })
            )
          )
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
