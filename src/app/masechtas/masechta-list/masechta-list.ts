import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Masechta } from '../../models/masechta.model';

@Component({
  selector: 'app-masechta-list',
  imports: [CommonModule],
  templateUrl: './masechta-list.html',
  styleUrls: ['./masechta-list.scss'],
})
export class MasechtaListComponent implements OnInit {
  @Input() mode: 'viewMasechtas' | 'selectDafim' = 'viewMasechtas';
  @Input() userId?: number;

  masechtas: Masechta[] = [];
  dafim: any[] = [];
  selectedMasechta: number | null = null;
  selectedDafim: number[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      if (data['mode']) {
        this.mode = data['mode'];
      }
    })

    this.route.paramMap.subscribe(params => {
      const id = params.get('userId');
      if (id) this.userId = +id;
    });

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
    if (this.mode !== 'selectDafim') return;

    if (this.selectedDafim.length === 0) {
      this.selectedDafim.push(dafId);
      return;
    }
    if (this.selectedDafim.length === 1) {

    }







    const selectedDafimIndex = this.selectedDafim.indexOf(dafId)
    if (selectedDafimIndex >= 0)
      this.selectedDafim.splice(selectedDafimIndex, 1)
    else
      this.selectedDafim.push(dafId)
  }
    
  addDafimToUser(userId: number) {
    if (this.mode !== 'selectDafim') return;

    const body = {
      userId: userId,
      dafimIds: this.selectedDafim
    }

    this.http.post('https://localhost:7066/api/AssignUserToUmid/AssignDafim', body)
      .subscribe({
        next: res => console.log('Dafim assigned successfully', res),
        error: err => console.error(err)
      });
  }
}
