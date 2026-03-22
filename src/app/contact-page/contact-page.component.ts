import { Component, inject } from '@angular/core';
import { owner } from '../utils/static-data';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutBasicComponent } from '../shared/layout-basic/layout-basic.component';
import { facebook, github, instagram } from '../utils/hrefs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  imports: [LayoutBasicComponent, MatIconModule],
})
export class ContactPageComponent {
  public owner = owner;
  public facebook = facebook;
  public instagram = instagram;
  public github = github;

  private clipboard = inject(Clipboard);
  private snackBar = inject(MatSnackBar);

  copyToClipboard(text: string) {
    this.clipboard.copy(text);
    this.snackBar.open(`"${text}" copied to clipboard!`, 'Close', {
      duration: 3000,
    });
  }
}
