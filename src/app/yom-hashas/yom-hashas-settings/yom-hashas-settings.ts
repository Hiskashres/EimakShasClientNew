import { Component } from '@angular/core';
import { YomHashasInfo } from '../../models/yom-hashas-info.model';
import { YomHashasService } from '../../services/yom-hashas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-yom-hashas-settings',
  imports: [FormsModule],
  templateUrl: './yom-hashas-settings.html',
  styleUrl: './yom-hashas-settings.scss',
})
export class YomHashasSettings {
  yomHashasInfo!: YomHashasInfo;

  constructor(private service: YomHashasService) {}

  ngOnInit(): void {
    this.service.getYomHashasInfo().subscribe(data => {
      this.yomHashasInfo = data;
    })
  }

  saveGoals() {
    this.service.setGoals(
      this.yomHashasInfo.mainGoal,
      this.yomHashasInfo.bonusGoal,
      this.yomHashasInfo.endTime
    ).subscribe({
      next: (res) => console.log('saved', res),
      error: (err) => console.error('Error', err.error)
    });
  }
}
