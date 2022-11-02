import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs';

import { CharacterDetailSelectors } from '../../store';

@Component({
  selector: 'app-character-details-page',
  templateUrl: './character-details-page.component.html',
  styleUrls: ['./character-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsPageComponent {
  characterDetails$ = this.store
    .select(CharacterDetailSelectors.getCharacter)
    .pipe(filter((char) => !!char));
  characterMovies$ = this.store.select(
    CharacterDetailSelectors.getCharacterMovies
  );

  constructor(private router: Router, private store: Store) {}

  backToCharacters() {
    this.router.navigate(['/characters']);
  }
}
