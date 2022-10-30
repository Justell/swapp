import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import {
  MovieDetailActions,
  MovieDetailsSelectors,
  MoviesSelectors,
} from '../../store';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsPageComponent {
  movieDetails$ = this.store
    .select(MovieDetailsSelectors.getMovie)
    .pipe(filter((movie) => !!movie));

  constructor(private router: Router, private store: Store) {}

  backToMovies() {
    this.router.navigate(['/movies']);
  }
}
