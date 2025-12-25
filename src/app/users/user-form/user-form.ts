
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.scss',]
})
export class UserFormComponent {
  users: User[] = [];
  selectedUserId: number | null = null;

  user: User = {userId: 0, firstName: '', lastName: '', phone: '', dafimAmount: 0, dafimCompleted: 0, dafimNotCompleted: 0, percentageCompleted: 0, dafPerDay: true, hasText: true, chavrisaId: 0, chavrisaName: '' };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(list => {
      this.users = list;
    });
  }

  onSelect(userId: number | string | null) {
    if (userId == null) {
      this.selectedUserId = null;
      this.user.chavrisaId = 0;
      this.user.chavrisaName = '';
      return;
    }

    const id = typeof userId === 'string' ? Number(userId) : userId;
    this.selectedUserId = id;
    this.user.chavrisaId = id;

    const found = this.users.find(u => u.userId === id);
    this.user.chavrisaName = found ? `${found.firstName} ${found.lastName}` : '';
  }


  onSubmit() {
    this.userService.addUser(this.user).subscribe({
      next: (res) => {
        this.user = res;
        alert(`${this.user.firstName} ${this.user.lastName} has been added\nUser ID ${this.user.userId}`);
        console.log('Saved user:', res);
      },
      error: (err) => {
        alert(`Error while adding ${this.user.firstName} ${this.user.lastName}`);
  console.error(err);
      }
    });
  }
}
