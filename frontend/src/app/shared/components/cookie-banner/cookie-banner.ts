import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CookieConsentService } from '../../../core/services/cookie-consent';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.scss',
})
export class CookieBanner {
  private readonly cookieConsentService = inject(CookieConsentService);

  readonly consent = this.cookieConsentService.consent;
  readonly showBanner = computed(() => this.consent() === null);
  readonly showDetails = signal(false);

  readonly externalMedia = signal(false);
  readonly analytics = signal(false);
  readonly marketing = signal(false);

  acceptAll(): void {
    this.cookieConsentService.acceptAll();
  }

  rejectOptional(): void {
    this.cookieConsentService.rejectOptional();
  }

  saveSelection(): void {
    this.cookieConsentService.saveCustom({
      externalMedia: this.externalMedia(),
      analytics: this.analytics(),
      marketing: this.marketing(),
    });
  }

  toggleDetails(): void {
    this.showDetails.update((value) => !value);
  }

  toggleExternalMedia(): void {
    this.externalMedia.update((value) => !value);
  }

  toggleAnalytics(): void {
    this.analytics.update((value) => !value);
  }

  toggleMarketing(): void {
    this.marketing.update((value) => !value);
  }
}