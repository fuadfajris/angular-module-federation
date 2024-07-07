import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { crud } from '../models/crud';

@Injectable({
  providedIn: 'root'
})
export class CrudFeatureService {

  constructor(
    private http: HttpClient
  ) { }

  public getData(): Observable<crud[]> {
    return this.http.get<crud[]>(`https://jsonplaceholder.typicode.com/users`);
  }
}
