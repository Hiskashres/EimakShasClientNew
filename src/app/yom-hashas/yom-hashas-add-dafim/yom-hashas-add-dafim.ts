import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { YomHashasService } from '../../services/yom-hashas.service';
import { SelectDafim } from '../../masechtas/select-dafim/select-dafim';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yom-hashas-add-dafim',
  imports: [RouterModule, SelectDafim, CommonModule],
  templateUrl: './yom-hashas-add-dafim.html',
  styleUrl: './yom-hashas-add-dafim.scss',
})
export class YomHashasAddDafim {
  selectedDafim: number[] = [];

  constructor(private service: YomHashasService) {}

  saveSelection() {
    this.service.addDafim(this.selectedDafim)
      .subscribe({
        next: res => console.log('Dafim added successfully', res),
        error: err => console.error(err)
      });
  }

  onDafimSelected(dafimIds: number[]) {
    console.log('Dafim selected:', dafimIds);
    this.selectedDafim = dafimIds;
  }
}

