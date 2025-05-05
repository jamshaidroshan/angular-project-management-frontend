import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'dashboard',
      pathMatch: 'full',
      loadComponent: () =>
        import('./dashboard/dashboard.component').then(
          (m) => m.DashboardComponent
        ),
    },
];
