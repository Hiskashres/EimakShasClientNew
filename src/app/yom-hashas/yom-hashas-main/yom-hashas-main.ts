import { Component } from '@angular/core';
import { YomHashasInfo } from '../../models/yom-hashas-info.model';

@Component({
  selector: 'app-yom-hashas-main',
  imports: [],
  templateUrl: './yom-hashas-main.html',
  styleUrls: ['./yom-hashas-main.scss'],
})
export class YomHashasMain {
  yomHashasInfo: YomHashasInfo =  { 
    mainGoal: 0, 
    bonusGoal: 0, 
    endTime: '', 
    dafimAmount: 0, 
    dafimFinished: 0, 
    dafimNotFinished: 0, 
    percentageFinished: 0, 
    dafimNotFinished_bonus: 0, 
    percentageFinished_bonus: 0 
  }


}
