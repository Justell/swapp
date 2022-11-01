import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterListPageComponent } from './containers/character-list/character-list-page.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharactersGuard } from './guards/characters.guard';

const routes: Routes = [
  {
    path: '',
    component: CharacterListPageComponent,
    canActivate: [CharactersGuard],
  },
  {
    path: ':id',
    component: CharacterDetailsComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CharactersGuard],
})
export class CharactersRoutingModule {}
