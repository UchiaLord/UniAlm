import { Routes } from '@angular/router';

import { AppShell } from './core/layout/app-shell/app-shell';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Menu } from './pages/menu/menu';
import { Events } from './pages/events/events';
import { Contact } from './pages/contact/contact';
import { Impressum } from './pages/impressum/impressum';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      {
        path: '',
        component: Home,
        title: 'Unialm Wien | 3€ Bar, Après-Ski Atmosphäre & Longdrinks',
        data: {
          seo: {
            description:
              'Unialm Wien – die rustikale 3€ Bar im Herzen Wiens mit Longdrinks, Shots, 80er- & 90er-Musik, Après-Ski Atmosphäre und fairen Preisen.',
            canonical: 'https://unialm.at/',
            ogTitle: 'Unialm Wien | 3€ Bar im Herzen Wiens',
            ogDescription:
              'Die Unialm Wien verbindet günstige Drinks, alpine Bar-Atmosphäre, 80er- & 90er-Musik und echte Partynächte mitten in Wien.',
            ogImage: 'https://unialm.at/assets/images/hero/uni-alm-interior.png',
          },
        },
      },
      {
        path: 'ueber-uns',
        component: About,
        title: 'Über uns | Unialm Wien – 3€ Bar im Herzen Wiens',
        data: {
          seo: {
            description:
              'Erfahre mehr über die Unialm Wien: rustikale Almhüttenatmosphäre, faire Getränkepreise, gute Musik und echte Bar-Kultur mitten in Wien.',
            canonical: 'https://unialm.at/ueber-uns',
            ogTitle: 'Über uns | Unialm Wien',
            ogDescription:
              'Die Geschichte und Atmosphäre der Unialm Wien – die 3€ Bar mit alpinem Charakter und legendären Nächten.',
            ogImage: 'https://unialm.at/assets/images/gallery/uni-alm-eingang.png',
          },
        },
      },
      {
        path: 'menu',
        component: Menu,
        title: '3€ Menü | Longdrinks, Shots & günstige Drinks in Wien',
        data: {
          seo: {
            description:
              'Entdecke das 3€ Menü der Unialm Wien: Longdrinks, Shots, Spirituosen und Bar-Klassiker zu fairen Preisen mitten im Wiener Nachtleben.',
            canonical: 'https://unialm.at/menu',
            ogTitle: '3€ Menü | Unialm Wien',
            ogDescription:
              'Longdrinks, Shots und Bar-Klassiker zum legendären Unialm Preis. Die Getränkekarte der 3€ Bar in Wien.',
            ogImage: 'https://unialm.at/assets/images/drinks/getraenke-banner.jpg',
          },
        },
      },
      {
        path: 'events',
        component: Events,
        title: 'Events & Feiern | Unialm Wien',
        data: {
          seo: {
            description:
              'Feiere Geburtstage, Abschlussfeiern, Firmenveranstaltungen und Gruppenabende in der Unialm Wien mit alpiner Atmosphäre und fairen Getränkepreisen.',
            canonical: 'https://unialm.at/events',
            ogTitle: 'Events & Feiern | Unialm Wien',
            ogDescription:
              'Dein Event in der Unialm Wien: alpine Bar-Atmosphäre, Drinks, Musik und Stimmung für Gruppen, Geburtstage und Feiern.',
            ogImage: 'https://unialm.at/assets/images/gallery/uni-alm-eingang.png',
          },
        },
      },
      {
        path: 'kontakt',
        component: Contact,
        title: 'Kontakt | Unialm Wien',
        data: {
          seo: {
            description:
              'Kontakt zur Unialm Wien: Adresse, Telefon, E-Mail und Informationen zur 3€ Bar in der Hörlgasse 10, 1090 Wien.',
            canonical: 'https://unialm.at/kontakt',
            ogTitle: 'Kontakt | Unialm Wien',
            ogDescription:
              'Kontaktiere die Unialm Wien in der Hörlgasse 10, 1090 Wien.',
            ogImage: 'https://unialm.at/assets/images/gallery/uni-alm-eingang.png',
          },
        },
      },
      {
        path: 'impressum',
        component: Impressum,
        title: 'Impressum | Unialm Wien',
        data: {
          seo: {
            description: 'Impressum der Unialm Wien.',
            canonical: 'https://unialm.at/impressum',
            noindex: true,
          },
        },
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];