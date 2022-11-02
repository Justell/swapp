import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterListPageComponent } from './containers/character-list/character-list-page.component';
import { CharactersGuard } from './guards/characters.guard';
import { CharacterDetailsPageComponent } from './containers/character-details-page/character-details-page.component';
import { CharacterExistGuard } from './guards/character-exist.guard';

const routes: Routes = [
  {
    path: '',
    component: CharacterListPageComponent,
    canActivate: [CharactersGuard],
  },
  {
    path: ':id',
    component: CharacterDetailsPageComponent,
    canActivate: [CharacterExistGuard],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CharactersGuard, CharacterExistGuard],
})
export class CharactersRoutingModule {}
