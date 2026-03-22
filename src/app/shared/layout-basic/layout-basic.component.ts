import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout-basic',
  templateUrl: './layout-basic.component.html',
  styleUrls: ['./layout-basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, FooterComponent],
})
export class LayoutBasicComponent {}
