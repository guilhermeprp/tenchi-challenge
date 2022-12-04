import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EpisodesService {
  constructor(private httpClient: HttpClient) { }

  public getAllEpisodes(): Observable<any> {
    return this.httpClient.get(`${environment.BASE_URL_API}/episode`);
  }

  public getEpisode(id: number): Observable<any> {
    return this.httpClient.get(`${environment.BASE_URL_API}/episode/${id}`);
  }
}
