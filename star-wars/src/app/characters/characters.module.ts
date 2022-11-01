import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersService } from './services/characters.service';
import { charactersFeatureKey, effects, reducers } from './store';
import { CharacterListComponent } from './containers/character-list/character-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CharactersRoutingModule,
    StoreModule.forFeature(charactersFeatureKey, reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [CharacterListComponent],
  exports: [CharacterListComponent],
  providers: [CharactersService],
})
export class CharactersModule {}
