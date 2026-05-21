import { Routes } from '@angular/router';

import { AppShell } from './core/layout/app-shell/app-shell';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Menu } from './pages/menu/menu';
import { Events } from './pages/events/events';
import { Contact } from './pages/contact/contact';
import { Impressum } from './pages/impressum/impressum';
import { Datenschutz } from './pages/datenschutz/datenschutz';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      {
        path: '',
        component: Home,
        title: 'Uni Alm Wien | 3€ Bar, Après-Ski Atmosphäre & Longdrinks',
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
        title: 'Über uns | Uni Alm Wien – 3€ Bar im Herzen Wiens',
        data: {
          seo: {
            description:
              'Erfahre mehr über die Uni Alm Wien: rustikale Almhüttenatmosphäre, faire Getränkepreise, gute Musik und echte Bar-Kultur mitten in Wien.',
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
              'Entdecke das 3€ Menü der Uni Alm Wien: Longdrinks, Shots, Spirituosen und Bar-Klassiker zu fairen Preisen mitten im Wiener Nachtleben.',
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
        title: 'Events & private Feiern in Wien | Uni Alm Wien',
        data: {
          seo: {
            description:
               'Events, Geburtstage, Abschlussfeiern und private Feiern in der Uni Alm Wien. Après-Ski-Atmosphäre, 3€ Drinks, 80er- & 90er-Hits und Gruppenabende im 9. Bezirk.',
            canonical: 'https://unialm.at/events',
            ogTitle: 'Events & Feiern | Unialm Wien',
            ogDescription:
               'Plane Geburtstage, Gruppenabende und private Feiern in der Uni Alm Wien mit Drinks, Musik und Après-Ski-Atmosphäre.',
            ogImage: 'https://unialm.at/assets/images/gallery/uni-alm-eingang.png',
          },
        },
      },
      {
        path: 'kontakt',
        component: Contact,
        title: 'Kontakt | Uni Alm Wien',
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
      {
        path: 'datenschutz',
        component: Datenschutz,
        title: 'Datenschutz | Unialm Wien',
        data: {
            seo: {
              description:
                'Datenschutzerklärung der Unialm Wien mit Informationen zur Verarbeitung personenbezogener Daten, Kontaktaufnahme, Cookies und zukünftigen Website-Funktionen.',
              canonical: 'https://unialm.at/datenschutz',
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