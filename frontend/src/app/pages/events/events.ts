import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  type: string;
}

interface CalendarDay {
  date: Date;
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: CalendarEvent[];
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events {
  private readonly today = new Date();

  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();

  readonly weekdays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  readonly events: CalendarEvent[] = [
    // Später durch Backend ersetzen:
    // { id: 1, title: 'Oktoberfest Party', date: '2026-05-23', type: 'Special' },
  ];

  get monthLabel(): string {
    return new Intl.DateTimeFormat('de-AT', {
      month: 'long',
      year: 'numeric',
    }).format(new Date(this.currentYear, this.currentMonth, 1));
  }

  get calendarDays(): CalendarDay[] {
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0);

    const mondayBasedStart = (firstDayOfMonth.getDay() + 6) % 7;
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(firstDayOfMonth.getDate() - mondayBasedStart);

    const days: CalendarDay[] = [];

    for (let index = 0; index < 42; index++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);

      const isoDate = this.toIsoDate(date);

      days.push({
        date,
        dayNumber: date.getDate(),
        isCurrentMonth: date.getMonth() === this.currentMonth,
        isToday: this.isSameDate(date, this.today),
        events: this.events.filter((event) => event.date === isoDate),
      });
    }

    const hasSixthWeek = days
      .slice(35)
      .some((day) => day.isCurrentMonth || day.events.length > 0);

    return hasSixthWeek ? days : days.slice(0, 35);
  }

  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
      return;
    }

    this.currentMonth--;
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
      return;
    }

    this.currentMonth++;
  }

  goToCurrentMonth(): void {
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
  }

  private toIsoDate(date: Date): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  private isSameDate(first: Date, second: Date): boolean {
    return (
      first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth() &&
      first.getDate() === second.getDate()
    );
  }
}