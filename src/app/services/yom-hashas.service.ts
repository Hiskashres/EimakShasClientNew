import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YomHashasInfo } from '../models/yom-hashas-info.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YomHashasService {
  private apiUrl = 'https://localhost:7066/api/YomHashas'

  constructor(private http: HttpClient) {}

  getYomHashasInfo(): Observable<YomHashasInfo> {
    return this.http.get<YomHashasInfo>(`${this.apiUrl}/getYomHashasInfo`);
  }

  setGoals( mainGoal: number, bonusGoal: number, endTime: string): Observable<any> {
    const body = { mainGoal, bonusGoal, endTime };
    return this.http.post(`${this.apiUrl}/setGoals`, body );
  }

  addDafim(dafimIds: number[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/assignDafim`, dafimIds );
  }
}

