import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { MoviesActions, MoviesSelectors } from '../../store';

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss'],
})
export class MovieListPageComponent {
  moviesList$ = this.store.select(MoviesSelectors.getMovies);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(MoviesActions.loadMovies());
  }
}
