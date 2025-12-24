
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.scss',]
})
export class UserFormComponent {
  users: User[] = [];
  selectedUserId!: number;

  user: User = {userId: 0, firstName: '', lastName: '', phone: '', dafimAmount: 0, dafimCompleted: 0, dafimNotCompleted: 0, percentageCompleted: 0, dafPerDay: true, hasText: true};

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(list => {
      this.users = list;
    });
  }

  onSelect(userId: number) {
    this.selectedUserId = userId;
    this.user = this.users.find(u => u.userId === userId)!;
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
