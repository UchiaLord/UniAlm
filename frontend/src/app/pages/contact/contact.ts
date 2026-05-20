import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  form = {
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    reason: 'Reservierung',
    message: '',
  };

  submit(): void {
    console.log(this.form);

    // Backend später hier anbinden
  }
}