import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(apiUrl);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(apiUrl, person, httpOptions);
  }

  getPerson(id): Observable<Person> {
    return this.http.get<Person>(`${apiUrl}/${id}`);
  }

  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(`${apiUrl}/${person.id}`, person, httpOptions);
  }

  deletePerson(id:number):Observable<{}>{
    return this.http.delete(`${apiUrl}/${id}`);
  }

  constructor(private http: HttpClient) { }


}


// const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};

const apiUrl = "http://localhost:3000/api/people";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };