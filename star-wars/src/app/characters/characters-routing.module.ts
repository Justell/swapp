import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterListComponent } from './containers/character-list/character-list.component';
import { CharactersGuard } from './guards/characters.guard';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent,
    canActivate: [CharactersGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CharactersGuard],
})
export class CharactersRoutingModule {}
