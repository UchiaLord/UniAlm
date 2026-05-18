import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly mobileOpen = signal(false);

  protected toggleMobileMenu(): void {
    this.mobileOpen.update((value) => !value);
  }

  protected closeMobileMenu(): void {
    this.mobileOpen.set(false);
  }
}