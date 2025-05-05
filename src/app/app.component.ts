import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuNode } from './interfaces/menu/MenuNode';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLinkActive,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay()
    );
  }

  childrenAccessor = (node: MenuNode) => node.children ?? [];

  hasChild = (_: number, node: MenuNode) =>
    !!node.children && node.children.length > 0;
  showFiller = false;
  dataSource: MenuNode[] = [
    {
      name: 'Overview',
      route: '',
      children: [
        { name: 'Dashboard', route: '/dashboard' },
        { name: 'My Task', route: '' },
        { name: 'Chat', route: '' },
      ],
    },

    {
      name: 'Projects',
      route: '',
      children: [
        {
          name: 'NKU',
          route: '',
          children: [
            { name: 'Corx', route: '' },
            { name: 'Edara', route: '' },
          ],
        },
        {
          name: 'RP',
          route: '',
          children: [
            { name: 'Veins', route: '' },
            { name: 'Matcheek', route: '' },
          ],
        },
      ],
    },
    {
      name: 'Task',
      route: '',
      children: [],
    },
  ];
}
