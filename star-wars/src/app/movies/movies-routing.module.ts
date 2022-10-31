import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsPageComponent } from './containers/movie-details-page/movie-details-page.component';
import { MovieListPageComponent } from './containers/movie-list-page/movie-list-page.component';
import { MovieExistGuard } from './guards/movie-exist.guard';
import { MoviesGuard } from './guards/movies.guard';

const routes: Routes = [
  { path: '', component: MovieListPageComponent, canActivate: [MoviesGuard] },
  {
    path: ':id',
    component: MovieDetailsPageComponent,
    canActivate: [MovieExistGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MoviesGuard, MovieExistGuard],
})
export class MoviesRoutingModule {}
