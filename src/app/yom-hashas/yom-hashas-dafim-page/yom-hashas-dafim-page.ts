import { Component } from '@angular/core';
import { YomHashasService } from '../../services/yom-hashas.service';
import { YomHashasDaf } from '../../models/yom-hashas-daf.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yom-hashas-dafim-page',
  imports: [CommonModule],
  templateUrl: './yom-hashas-dafim-page.html',
  styleUrls: ['./yom-hashas-dafim-page.scss'],
})
export class YomHashasDafimPage {
  dafim: YomHashasDaf[] = [];

  constructor(private service: YomHashasService) {}

  ngOnInit() {
    this.loadDafim();
  }

  loadDafim() {
    this.service.getDafim()
    .subscribe((res: YomHashasDaf[]) => {
      this.dafim = res;
    })
  }
}
