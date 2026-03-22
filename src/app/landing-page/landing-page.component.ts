import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutBasicComponent } from '../shared/layout-basic/layout-basic.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { SeasonalAnimeComponent } from './components/seasonal-anime/seasonal-anime.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LayoutBasicComponent, TechStackComponent, SeasonalAnimeComponent],
})
export class LandingPageComponent {}
