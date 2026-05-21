import { Injectable, signal } from '@angular/core';

export interface CookieConsentSettings {
  necessary: true;
  externalMedia: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'uni-alm-cookie-consent';

const DEFAULT_CONSENT: CookieConsentSettings = {
  necessary: true,
  externalMedia: false,
  analytics: false,
  marketing: false,
};

@Injectable({
  providedIn: 'root',
})
export class CookieConsentService {
  private readonly consentSignal = signal<CookieConsentSettings | null>(this.readConsent());

  readonly consent = this.consentSignal.asReadonly();

  acceptAll(): void {
    this.saveConsent({
      necessary: true,
      externalMedia: true,
      analytics: true,
      marketing: true,
    });
  }

  rejectOptional(): void {
    this.saveConsent(DEFAULT_CONSENT);
  }

  saveCustom(settings: Omit<CookieConsentSettings, 'necessary'>): void {
    this.saveConsent({
      necessary: true,
      externalMedia: settings.externalMedia,
      analytics: settings.analytics,
      marketing: settings.marketing,
    });
  }

  resetConsent(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.consentSignal.set(null);
  }

  private saveConsent(settings: CookieConsentSettings): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    this.consentSignal.set(settings);
  }

  private readConsent(): CookieConsentSettings | null {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return null;
    }

    try {
      const parsed = JSON.parse(raw) as Partial<CookieConsentSettings>;

      return {
        necessary: true,
        externalMedia: parsed.externalMedia === true,
        analytics: parsed.analytics === true,
        marketing: parsed.marketing === true,
      };
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  }
}