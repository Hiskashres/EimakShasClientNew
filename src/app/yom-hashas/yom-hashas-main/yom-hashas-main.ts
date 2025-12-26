import { Component, OnInit } from '@angular/core';
import { YomHashasInfo } from '../../models/yom-hashas-info.model';
import { YomHashasService } from '../../services/yom-hashas.service';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { YomHashasDaf } from '../../models/yom-hashas-daf.model';

@Component({
  selector: 'app-yom-hashas-main',
  imports: [RouterLink, CommonModule],
  templateUrl: './yom-hashas-main.html',
  styleUrls: ['./yom-hashas-main.scss'],
})
export class YomHashasMain implements OnInit{

  yomHashasInfo!: YomHashasInfo;
  dafim: YomHashasDaf[] = [];

  constructor(private service: YomHashasService) {}

  ngOnInit(): void {
    this.service.getYomHashasInfo().subscribe(data => {
      this.yomHashasInfo = data;
    })

    this.loadDafim();
  }

  get percent(): number {
    // safe clamp and rounding
    const p = this.yomHashasInfo?.percentageFinished ?? 0;
    return Math.max(0, Math.min(100, Math.round(p)));
  }

  loadDafim() {
    this.service.getDafim()
    .subscribe((res: YomHashasDaf[]) => {
      this.dafim = res;
    })
  }
}
