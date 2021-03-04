
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Concours } from './Concours';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ConcoursService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getConcours(): Observable<Concours[]> {
    return this.http.get<Concours[]>(`${this.apiServerUrl}/Concours/all`);
  }

  public addConcours(concours: Concours): Observable<Concours> {
    return this.http.post<Concours>(`${this.apiServerUrl}/Concours/add`, concours);
  }

  public updateConcours(concours: Concours): Observable<Concours> {
    return this.http.put<Concours>(`${this.apiServerUrl}/Concours/update`, concours);
  }

  public deleteConcours(IdConcours: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/Concours/delete/${IdConcours}`);
  }
}
