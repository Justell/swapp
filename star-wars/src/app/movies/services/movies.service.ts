import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseList } from '../../shared/models';
import { BASE_URL } from '../../shared/utils';
import { Movie } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url = BASE_URL;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<ResponseList<Movie>> {
    return this.http.get<ResponseList<Movie>>(`${this.url}/films/`);
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/films/${id}/`);
  }
}
