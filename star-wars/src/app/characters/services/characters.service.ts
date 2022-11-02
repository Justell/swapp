import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, expand, map, Observable, reduce } from 'rxjs';

import { ResponseList } from '../../shared/models';
import { BASE_URL } from '../../shared/utils';
import { Character } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  url = BASE_URL;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    const defaultUrl = `${this.url}/people/`;

    return this.http.get<ResponseList<Character>>(defaultUrl).pipe(
      expand((response) =>
        response.next
          ? this.http.get<ResponseList<Character>>(response.next)
          : EMPTY
      ),
      map((response) => response.results),
      reduce((acc, results) => acc.concat(results), [] as Character[])
    );
  }

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.url}/people/${id}/`);
  }
}
