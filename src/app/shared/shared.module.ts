import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutBasicComponent } from './layout-basic/layout-basic.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
    ClipboardModule,
    CommonModule,
  ],
  declarations: [FooterComponent, HeaderComponent, LayoutBasicComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    LayoutBasicComponent,
    ClipboardModule,
  ],
})
export class SharedModule {}
