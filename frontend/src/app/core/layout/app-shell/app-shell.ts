import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { SeoService } from '../../services/seo.services';

@Component({
  selector: 'app-app-shell',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
})
export class AppShell {
  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.init();
  }

  protected scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}