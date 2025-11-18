import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { UserMasechta } from '../../models/user-masechta';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})

export class UserListComponent {
  users: User[] = [];
  userMasechtas: UserMasechta[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  forkJoin({
    users: this.userService.getUsers(),
    // userMasechtas: this.userService.getUserMasechtas()
  }).subscribe({
    next: (results) => {
      this.users = results.users;
      // this.userMasechtas = results.userMasechtas;

      // this.users = this.users.map(u => ({
      //   ...u,
      //   masechtasAssigned: this.userMasechtas
      //     .filter(m => m.userId === u.userId)
      //     .sort((a, b) => a.masechtaOrder - b.masechtaOrder)
      // }))
    },
    error: (err) => console.error('Error while loading data', err)
  });
}




  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe({
  //     next: (data) => this.users = data,
  //     error: (err) => console.error('Error while getting users', err)
  //   });
  // }

  onDelete(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.users = this.users.filter(u => u.userId !== userId);
          alert('User deleted successfully');
        },
        error: (err) => {
          console.error('Error deleting user', err)
        }
      })
    }
  }

  // selectedUserId?: number;
  // showMasechtaList = false;

  // selectDafim(userId: number) {
  //   this.selectedUserId = userId;
  //   this.showMasechtaList = true
  // }
}
