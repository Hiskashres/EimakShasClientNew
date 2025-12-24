import { Component } from '@angular/core';
import { YomHashasService } from '../../services/yom-hashas.service';
import { YomHashasDaf } from '../../models/yom-hashas-daf.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yom-hashas-dafim-list',
  imports: [CommonModule],
  templateUrl: './yom-hashas-dafim-list.html',
  styleUrls: ['./yom-hashas-dafim-list.scss'],
})
export class YomHashasDafimList {
  dafim: YomHashasDaf[] = [];

  constructor(private service: YomHashasService) {}

  ngOnInit() {
    this.loadDafim();
  }

  completeDaf(dafId: number) {
    this.service.completeDaf(dafId)
    .subscribe({
      next: res => {
        console.log('Reasponse:', res);
        this.loadDafim();
      },
      error: err => {
        console.error('Error:', err);
      }
    });
  }

  loadDafim() {
    this.service.getDafim()
    .subscribe((res: YomHashasDaf[]) => {
      this.dafim = res;
    })
  }
}
