import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Character } from '../../models';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsComponent {
  @Input() char!: Character | null | undefined;
  @Input() movies!: Record<'id' | 'name', string>[] | null | undefined;

  constructor() {}
}
