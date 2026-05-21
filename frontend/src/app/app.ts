import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CookieBanner } from './shared/components/cookie-banner/cookie-banner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CookieBanner],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('frontend');
}
