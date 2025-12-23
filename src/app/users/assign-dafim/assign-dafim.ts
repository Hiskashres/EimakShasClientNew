import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { UserService } from '../../services/user.service';
import { SelectDafim } from '../../masechtas/select-dafim/select-dafim';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assign-dafim',
  imports: [RouterModule, SelectDafim, CommonModule],
  templateUrl: './assign-dafim.html',
  styleUrls: ['./assign-dafim.scss'],
})
export class AssignDafim {

  userId!: number;
  selectedDafim: number[] = [];

  constructor(private service: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('userId');
      if (userId) this.userId = +userId;
    })
  }

  saveSelection() {
    this.service.assignDafim(this.userId, this.selectedDafim)
      .subscribe({
        next: res => console.log('Dafim assigned successfully', res),
        error: err => console.error(err)
      });
  }

  onDafimSelected(dafimIds: number[]) {
    console.log('Dafim selected:', dafimIds);
    this.selectedDafim = dafimIds;
  }
}


