import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person, PersonResponse } from '../models/interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<PersonResponse>{
      return this.http.get<PersonResponse>(`${environment.apiBaseUrl}`);
  }

  getPersonById(id: string){
    return this.http.get<Person>(`${environment.apiBaseUrl}/${id}`);
  }

}
