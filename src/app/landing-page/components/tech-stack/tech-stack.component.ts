import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTooltipModule],
})
export class TechStackComponent {
  readonly stack: { path: string; desc: string }[] = [
    {
      path: './assets/logos/angular.svg',
      desc: 'Angular',
    },
    {
      path: './assets/logos/typescript.svg',
      desc: 'Typescript',
    },
    {
      path: './assets/logos/html5.svg',
      desc: 'HTML',
    },
    {
      path: './assets/logos/css3.svg',
      desc: 'CSS',
    },
  ];
}
