import { Component, OnDestroy, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HeroSlide {
  variant: 'beer' | 'atmosphere' | 'talk';
  background: string;
  headlineLeft?: string;
  headlineRight?: string;
  headlineCenter?: string;
  scriptWord: string;
  centerImage?: string;
  centerBadge?: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnDestroy {
  protected readonly heroSlides: HeroSlide[] = [
    {
      variant: 'beer',
      background: '/assets/images/hero/uni-alm-interior.png',
      headlineLeft: '3€',
      headlineRight: 'Bar',
      scriptWord: 'Uni Alm',
      centerImage: '/assets/images/hero/unialm-bier.png',
    },
    {
      variant: 'atmosphere',
      background: '/assets/images/hero/glasses-with-vodka-on-the-old-board.jpg',
      headlineCenter: 'Atmosphere',
      scriptWord: 'great',
    },
    {
      variant: 'talk',
      background: '/assets/images/hero/men-with-drinks-in-the-pub-2023.jpg',
      headlineLeft: 'Drink',
      headlineRight: 'Talk',
      scriptWord: '&',
    },
  ];

  protected readonly activeSlideIndex = signal(0);
  protected readonly activeSlide = computed(() => this.heroSlides[this.activeSlideIndex()]);

  private readonly autoplayInterval = window.setInterval(() => {
    this.nextSlide();
  }, 7200);

  ngOnDestroy(): void {
    window.clearInterval(this.autoplayInterval);
  }

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

  protected splitText(value: string | undefined): string[] {
    return value ? value.split('') : [];
  }

  readonly isUnialmVideoPlaying = signal(false);

  playUnialmVideo(): void {
    this.isUnialmVideoPlaying.set(true);
  }
}