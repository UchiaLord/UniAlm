import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

interface SeoData {
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);

  init(): void {
    queueMicrotask(() => this.updateSeo());

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.updateSeo());
  }

  private updateSeo(): void {
    const route = this.getDeepestRoute(this.activatedRoute);

    const seo = route?.snapshot?.data?.['seo'] as SeoData | undefined;
    const routeTitle = route?.snapshot?.title;

    const fallbackTitle = 'Unialm Wien | 3€ Bar im Herzen Wiens';
    const fallbackDescription =
      'Unialm Wien ist eine rustikale 3€ Bar im Herzen Wiens mit Longdrinks, Shots, Après-Ski Atmosphäre, 80er- und 90er-Musik und fairen Preisen.';

    const pageTitle = routeTitle ?? fallbackTitle;
    const description = seo?.description ?? fallbackDescription;

    this.title.setTitle(pageTitle);

    this.updateTag('name', 'description', description);
    this.updateTag('property', 'og:title', seo?.ogTitle ?? pageTitle);
    this.updateTag('property', 'og:description', seo?.ogDescription ?? description);
    this.updateTag('name', 'twitter:title', seo?.ogTitle ?? pageTitle);
    this.updateTag('name', 'twitter:description', seo?.ogDescription ?? description);

    this.updateTag('property', 'og:type', 'website');
    this.updateTag('property', 'og:site_name', 'Unialm Wien');
    this.updateTag('name', 'twitter:card', 'summary_large_image');

    if (seo?.ogImage) {
      this.updateTag('property', 'og:image', seo.ogImage);
      this.updateTag('name', 'twitter:image', seo.ogImage);
    }

    this.updateTag('name', 'robots', seo?.noindex ? 'noindex, follow' : 'index, follow');

    this.setCanonical(seo?.canonical ?? `https://unialm.at${this.router.url}`);
    this.setLocalBusinessJsonLd();
  }

  private getDeepestRoute(route: ActivatedRoute | null | undefined): ActivatedRoute | undefined {
    let current: ActivatedRoute | undefined = route ?? undefined;

    while (current?.firstChild) {
      current = current.firstChild;
    }

    return current;
  }

  private updateTag(attribute: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [attribute]: key, content });
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private setLocalBusinessJsonLd(): void {
    const id = 'unialm-local-business-jsonld';
    const existing = this.document.getElementById(id);

    if (existing) {
      existing.remove();
    }

    const script = this.document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BarOrPub',
      name: 'Unialm Wien',
      url: 'https://unialm.at',
      image: 'https://unialm.at/assets/images/hero/uni-alm-interior.png',
      telephone: '+436606804879',
      email: 'info@unialm.at',
      priceRange: '€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hörlgasse 10',
        postalCode: '1090',
        addressLocality: 'Wien',
        addressCountry: 'AT',
      },
      servesCuisine: 'Drinks',
      description:
        'Unialm Wien ist eine rustikale 3€ Bar im Herzen Wiens mit Longdrinks, Shots, Après-Ski Atmosphäre, 80er- und 90er-Musik und fairen Preisen.',
    });

    this.document.head.appendChild(script);
  }
}