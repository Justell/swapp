import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, Observable, of, switchMap } from 'rxjs';

import { CharacterDetailSelectors, State } from '../store';

@Injectable()
export class CharacterExistGuard implements CanActivate {
  constructor(private store: Store<State>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(CharacterDetailSelectors.getCharacter).pipe(
      switchMap((character) => {
        if (!character) {
          this.router.navigate(['/home']);
        }
        return of(true);
      }),
      catchError(() => of(false))
    );
  }
}
