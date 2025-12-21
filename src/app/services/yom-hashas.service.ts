import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class YomHashasService {
  private apiUrl = 'https://localhost:7066/api/YomHashas'

  constructor(private http: HttpClient) {}

}
