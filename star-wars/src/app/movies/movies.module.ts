import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListPageComponent } from './containers/movie-list-page/movie-list-page.component';

@NgModule({
  imports: [CommonModule, MoviesRoutingModule],
  declarations: [MovieListPageComponent],
  exports: [MovieListPageComponent],
  providers: [],
})
export class MoviesModule {}
