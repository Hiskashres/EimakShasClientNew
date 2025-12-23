import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Masechta } from '../../models/masechta.model';

@Component({
  selector: 'app-select-dafim',
  imports: [CommonModule],
  templateUrl: './select-dafim.html',
  styleUrls: ['./select-dafim.scss'],
})
export class SelectDafim implements OnInit {

  masechtas: Masechta[] = [];
  dafim: any[] = [];
  selectedMasechta: number | null = null;
  selectedDafim: number[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadMasechtas();
  }

  loadMasechtas() {
    this.http.get('https://localhost:7066/api/Shas/masechtas')
      .subscribe((res: any)=> { 
        this.masechtas = res;
      });
  }

  loadDafim(masechtaId: number) {
    this.selectedMasechta = masechtaId;
    this.http.get(`https://localhost:7066/api/Shas/dafim/${masechtaId}`)
      .subscribe((res: any) => {
        this.dafim =res;
      });
  }

  selectDafim(dafId: number) {
    if (this.selectedDafim.length === 0) {
      this.selectedDafim.push(dafId);
      return;
    }

    const selectedDafimIndex = this.selectedDafim.indexOf(dafId)

    if (selectedDafimIndex >= 0)
      this.selectedDafim.splice(selectedDafimIndex, 1)
    else this.selectedDafim.push(dafId)

    this.emitSelection();
  }

  @Output() dafimSelected = new EventEmitter<number[]>();

  private emitSelection() {
    this.dafimSelected.emit(this.selectedDafim);
  }
}
