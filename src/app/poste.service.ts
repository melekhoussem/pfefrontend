import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poste } from './poste/poste';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class PosteService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getPoste(): Observable<Poste[]> {
    return this.http.get<Poste[]>(`${this.apiServerUrl}/Poste/all`);
  }

  public addPoste(poste: Poste): Observable<Poste> {
    return this.http.post<Poste>(`${this.apiServerUrl}/Poste/add`, poste);
  }

  public updatePoste(poste: Poste): Observable<Poste> {
    return this.http.put<Poste>(`${this.apiServerUrl}/Poste/update`, poste);
  }

  public deletePoste(idPoste: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/Poste/delete/${idPoste}`);
  }
}
