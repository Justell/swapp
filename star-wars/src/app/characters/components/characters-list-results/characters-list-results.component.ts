import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Character } from '../../models';

@Component({
  selector: 'app-characters-list-results',
  templateUrl: './characters-list-results.component.html',
  styleUrls: ['./characters-list-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListResultsComponent {
  @Input() charList!: Character[];
  @Input() searchInput!: string;
  @Input() loading!: boolean | null;
  @Input() error!: string | null;
  @Output() selectedChar = new EventEmitter<string>();

  onCharacterSelected(url: string) {
    this.selectedChar.emit(url);
  }
}
