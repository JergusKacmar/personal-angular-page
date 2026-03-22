import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact-page/contact-page.component').then(
        (m) => m.ContactPageComponent
      ),
  },
];
