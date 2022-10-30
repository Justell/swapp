import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListPageComponent } from './containers/movie-list-page/movie-list-page.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MoviesService } from './services/movies.service';
import { effects, moviesFeatureKey, reducers } from './store';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieDetailsPageComponent } from './containers/movie-details-page/movie-details-page.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MoviesRoutingModule,
    HttpClientModule,
    MatButtonModule,
    StoreModule.forFeature(moviesFeatureKey, reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    MovieListPageComponent,
    MovieListItemComponent,
    MovieDetailComponent,
    MovieDetailsPageComponent,
  ],
  exports: [MovieListPageComponent],
  providers: [MoviesService],
})
export class MoviesModule {}
