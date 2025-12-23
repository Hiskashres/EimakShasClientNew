
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'
import { UserMasechta } from '../models/user-masechta';

@Injectable({ providedIn: 'root' })

export class UserService {
  private apiUrl_User = 'https://localhost:7066/api/User'
  private apiUrl_AssignUserToUmid = 'https://localhost:7066/api/AssignUserToUmid'

  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl_User}/add`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl_User}/users`);
  }

  getUserMasechtas(): Observable<UserMasechta[]> {
    return this.http.get<UserMasechta[]>(`${this.apiUrl_User}/userMasechtas`);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl_User}/delete/${userId}`);
  }

  assignDafim(userId: number, dafimIds: number[]) : Observable<any> {
    const body = { userId, dafimIds };
    return this.http.post(`${this.apiUrl_AssignUserToUmid}/AssignDafim`, body);
  }
}
