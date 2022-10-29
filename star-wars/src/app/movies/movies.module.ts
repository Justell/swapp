import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListPageComponent } from './containers/movie-list-page/movie-list-page.component';
import { MoviesService } from './services/movies.service';
import { effects, moviesFeatureKey, reducer } from './store';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MoviesRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(moviesFeatureKey, reducer),
    EffectsModule.forFeature(effects),
  ],
  declarations: [MovieListPageComponent],
  exports: [MovieListPageComponent],
  providers: [MoviesService],
})
export class MoviesModule {}
