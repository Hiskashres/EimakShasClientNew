
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.scss',]
})
export class UserFormComponent {
user: User = {firstName: '', lastName: '', phone: '', dafPerDay: true, hasText: true};

constructor(private userService: UserService) {}

onSubmit() {
  this.userService.addUser(this.user).subscribe({
    next: (res) => {
      alert(`${this.user.firstName} ${this.user.lastName} has been added`);
      console.log(res);
    },
    error: (err) => {
      alert(`Error while adding ${this.user.firstName} ${this.user.lastName}`);
console.log(err);
    }
  });
}
}
