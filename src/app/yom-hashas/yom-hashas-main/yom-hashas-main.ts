import { Component, OnInit } from '@angular/core';
import { YomHashasInfo } from '../../models/yom-hashas-info.model';
import { YomHashasService } from '../../services/yom-hashas.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-yom-hashas-main',
  imports: [RouterLink],
  templateUrl: './yom-hashas-main.html',
  styleUrls: ['./yom-hashas-main.scss'],
})
export class YomHashasMain implements OnInit{

yomHashasInfo!: YomHashasInfo;

constructor(private service: YomHashasService) {}

ngOnInit(): void {
  this.service.getYomHashasInfo().subscribe(data => {
    this.yomHashasInfo = data;
  })
}

}
