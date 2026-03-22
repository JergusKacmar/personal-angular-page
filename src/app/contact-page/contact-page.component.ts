import { Component } from '@angular/core';
import { owner } from '../utils/static-data';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { facebook, github, instagram } from '../utils/hrefs';

@Component({
  standalone: false,
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  public owner = owner;
  public facebook = facebook;
  public instagram = instagram;
  public github = github;

  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {}

  copyToClipboard(text: string) {
    this.clipboard.copy(text);
    this.snackBar.open(`"${text}" copied to clipboard!`, 'Close', {
      duration: 3000,
    });
  }
}
