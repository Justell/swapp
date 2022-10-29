import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListPageComponent } from './containers/movie-list-page/movie-list-page.component';

const routes: Routes = [{ path: '', component: MovieListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
