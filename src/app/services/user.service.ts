
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'
import { UserUmid } from '../models/user-umid.model';
import { UserMasechta } from '../models/user-masechta';

@Injectable({ providedIn: 'root' })

export class UserService {
  private apiUrl = 'https://localhost:7066/api/User'

  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUserMasechtas(): Observable<UserMasechta[]> {
    return this.http.get<UserMasechta[]>(`${this.apiUrl}/userMasechtas`);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${userId}`);
  }
}
