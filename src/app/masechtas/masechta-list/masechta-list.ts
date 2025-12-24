import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Masechta } from '../../models/masechta.model';

@Component({
  selector: 'app-masechta-list',
  imports: [CommonModule],
  templateUrl: './masechta-list.html',
  styleUrls: ['./masechta-list.scss'],
})
export class MasechtaListComponent implements OnInit {
  masechtas: Masechta[] = [];
  dafim: any[] = [];
  selectedMasechta: number | null = null;
  selectedDafim: number[] = [];

  constructor( private http: HttpClient ) {}

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





    
  // addDafimToUser(userId: number) {
  //   if (this.mode !== 'selectDafim') return;

  //   const body = {
  //     userId: userId,
  //     dafimIds: this.selectedDafim
  //   }

  //   this.http.post('https://localhost:7066/api/AssignUserToUmid/AssignDafim', body)
  //     .subscribe({
  //       next: res => console.log('Dafim assigned successfully', res),
  //       error: err => console.error(err)
  //     });
  // }
}
