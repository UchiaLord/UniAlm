import { Routes } from '@angular/router';

import { AppShell } from './core/layout/app-shell/app-shell';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Menu } from './pages/menu/menu';
import { Events } from './pages/events/events';
import { Reservation } from './pages/reservation/reservation';
import { Contact } from './pages/contact/contact';
import { Legal } from './pages/legal/legal';
import { Privacy } from './pages/privacy/privacy';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      {
        path: '',
        component: Home,
        title: 'Unialm Wien | 3€ Bar',
      },
      {
        path: 'ueber-uns',
        component: About,
        title: 'Über uns | Unialm Wien',
      },
      {
        path: 'menu',
        component: Menu,
        title: '3€ Menu | Unialm Wien',
      },
      {
        path: 'events',
        component: Events,
        title: 'Events | Unialm Wien',
      },
      {
        path: 'reservierung',
        component: Reservation,
        title: 'Reservierung | Unialm Wien',
      },
      {
        path: 'kontakt',
        component: Contact,
        title: 'Kontakt | Unialm Wien',
      },
      {
        path: 'impressum',
        component: Legal,
        title: 'Impressum | Unialm Wien',
      },
      {
        path: 'datenschutz',
        component: Privacy,
        title: 'Datenschutz | Unialm Wien',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];