import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/players',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
];
