import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class YomHashasMain implements OnInit, OnDestroy {

  yomHashasInfo!: YomHashasInfo;
  dafim: YomHashasDaf[] = [];

  // Countdown bindings (displayed in template)
  countdownHours: string = '00';
  countdownMinutes: string = '00';
  countdownSeconds: string = '00';

  private timerId: any = null;

  constructor(private service: YomHashasService) {}

  ngOnInit(): void {
    this.service.getYomHashasInfo().subscribe(data => {
      this.yomHashasInfo = data;
      // Start countdown after we have the endTime
      if (this.yomHashasInfo?.endTime) {
        this.startCountdown();
      } else {
        console.warn('YomHashasMain: no endTime in YomHashasInfo');
      }
    });

    this.loadDafim();
  }

  ngOnDestroy(): void {
    this.stopCountdown();
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

  private startCountdown() {
    this.stopCountdown(); // ensure no duplicate intervals
    this.updateCountdown(); // immediate set
    this.timerId = setInterval(() => this.updateCountdown(), 1000);
  }

  private stopCountdown() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private updateCountdown() {
    if (!this.yomHashasInfo?.endTime) {
      this.setCountdownToZero();
      this.stopCountdown();
      return;
    }

    const now = new Date();
    // create today's date at the endTime
    let target = this.parseTimeOnlyToDate(this.yomHashasInfo.endTime, now);

    // If target is already passed today, count to tomorrow's same time (next occurrence)
    if (target.getTime() <= now.getTime()) {
      target.setDate(target.getDate() + 1);
    }

    const diffMs = target.getTime() - now.getTime();

    // If we've reached (or passed) the target, stop and show zeros
    if (diffMs <= 0) {
      this.setCountdownToZero();
      this.stopCountdown();
      return;
    }

    const totalSeconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    this.countdownHours = hours.toString().padStart(2, '0');
    this.countdownMinutes = minutes.toString().padStart(2, '0');
    this.countdownSeconds = seconds.toString().padStart(2, '0');
  }

  private setCountdownToZero() {
    this.countdownHours = '00';
    this.countdownMinutes = '00';
    this.countdownSeconds = '00';
  }

  private parseTimeOnlyToDate(timeOnly: string, referenceDate = new Date()): Date {
    // Accepts "HH:mm:ss" or "HH:mm" (24h).
    // Produces a Date with the same date as referenceDate and the hours/minutes/seconds from timeOnly.
    const parts = timeOnly.split(':').map(p => p.trim());
    const hours = parseInt(parts[0] ?? '0', 10) || 0;
    const minutes = parseInt(parts[1] ?? '0', 10) || 0;
    const seconds = parts[2] ? Math.floor(parseFloat(parts[2])) : 0;

    const date = new Date(referenceDate);
    date.setHours(hours, minutes, seconds, 0);
    return date;
  }
}