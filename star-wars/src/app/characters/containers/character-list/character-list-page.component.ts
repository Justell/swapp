import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Subject,
  Subscription,
  tap,
} from 'rxjs';

import { getIdFromUrl } from '../../../shared/utils';
import { Character } from '../../models';
import { CharacterListActions, CharactersSelectors } from '../../store';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list-page.component.html',
  styleUrls: ['./character-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListPageComponent implements OnInit, OnDestroy {
  characterList$ = this.store
    .select(CharactersSelectors.getCharacters)
    .pipe(map((chars) => (this.allCharacters = chars)));
  loading$ = this.store.select(CharactersSelectors.getLoading);
  error$ = this.store.select(CharactersSelectors.getError);

  constructor(
    private store: Store,
    private changeDet: ChangeDetectorRef,
    private router: Router
  ) {}

  allCharacters!: Character[];
  searchInput: string = '';
  private readonly searchSubject = new Subject<string>();
  searchSubscription = new Subscription();

  ngOnInit(): void {
    this.searchSubscription = this.searchSubject
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap((res) => {
          this.searchInput = res;
          this.changeDet.detectChanges();
        })
      )
      .subscribe();
  }

  onSearch(event: Event): void {
    const searchQuery = (event.target as HTMLInputElement).value;
    this.searchSubject.next(searchQuery);
  }

  onCharacterSelected(url: string): void {
    const resourceID = getIdFromUrl(url);
    this.store.dispatch(
      CharacterListActions.navigateToCharacterDetails({ id: resourceID })
    );
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
