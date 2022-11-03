import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { CharactersRoutingModule } from './characters-routing.module';
import { BackButtonModule } from '../shared/components/back-button/back-button.module';
import { CharacterListPageComponent } from './containers/character-list/character-list-page.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterDetailsPageComponent } from './containers/character-details-page/character-details-page.component';
import { CharactersListResultsComponent } from './components/characters-list-results/characters-list-results.component';
import { CharactersService } from './services/characters.service';
import { charactersFeatureKey, effects, reducers } from './store';
import { SearchPipe } from './utils/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    ScrollingModule,
    HttpClientModule,
    CharactersRoutingModule,
    StoreModule.forFeature(charactersFeatureKey, reducers),
    EffectsModule.forFeature(effects),
    BackButtonModule,
  ],
  declarations: [
    CharacterListPageComponent,
    CharacterDetailsComponent,
    SearchPipe,
    CharactersListResultsComponent,
    CharacterDetailsPageComponent,
  ],
  exports: [CharacterListPageComponent],
  providers: [CharactersService],
})
export class CharactersModule {}
