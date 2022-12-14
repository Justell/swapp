import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { getIdFromUrl } from '../../../shared/utils';
import { MoviesActions, MoviesSelectors } from '../../store';

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss'],
})
export class MovieListPageComponent {
  moviesList$ = this.store.select(MoviesSelectors.getMovies);
  loading$ = this.store.select(MoviesSelectors.getLoading);
  error$ = this.store.select(MoviesSelectors.getError);

  constructor(private store: Store, private router: Router) {}

  onMovieSelected(url: string) {
    const resourceID = getIdFromUrl(url);
    this.store.dispatch(
      MoviesActions.navigateToMovieDetails({ id: resourceID })
    );
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
