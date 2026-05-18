import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HeroSlide {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly heroSlides: HeroSlide[] = [
    {
      eyebrow: 'The only 3€ Bar in Vienna',
      title: 'Unialm 3€ Bar',
      description:
        'Après-Ski Atmosphäre, 80er & 90er Sound, günstige Drinks und rustikaler Hüttencharme mitten in Wien.',
      image: '/assets/images/hero/uni-alm-hero-interior.png',
      badge: '/assets/logos/three-euro-bar-logo.png',
    },
    {
      eyebrow: 'Rustikal. Laut. Echt.',
      title: 'Almhütte mitten in Wien',
      description:
        'Eine Bar mit alpinem Charakter, dunklem Holz, Skihütten-Feeling und kompromissloser Abendstimmung.',
      image: '/assets/images/atmosphere/uni-alm-eingang.png',
      badge: '/assets/logos/uni-alm-logo.png',
    },
    {
      eyebrow: 'Longdrinks, Bier & Shots',
      title: 'Faire Preise starke Nächte',
      description:
        'Getränke ohne übertriebene Clubpreise. Genau richtig für Studenten, Touristen und spontane Gruppen.',
      image: '/assets/images/drinks/gin-mule.jpg',
      badge: '/assets/logos/three-euro-bar-logo.png',
    },
  ];

  protected readonly activeSlideIndex = signal(0);

  protected readonly activeSlide = computed(() => this.heroSlides[this.activeSlideIndex()]);

  protected selectSlide(index: number): void {
    this.activeSlideIndex.set(index);
  }

  protected nextSlide(): void {
    this.activeSlideIndex.update((current) => (current + 1) % this.heroSlides.length);
  }

  protected previousSlide(): void {
    this.activeSlideIndex.update((current) =>
      current === 0 ? this.heroSlides.length - 1 : current - 1,
    );
  }
}