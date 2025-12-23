import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-yom-hashas-control-panel',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './yom-hashas-control-panel.html',
  styleUrl: './yom-hashas-control-panel.scss',
})
export class YomHashasControlPanel {

}
