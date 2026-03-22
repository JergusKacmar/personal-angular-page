import { Component } from '@angular/core';
import { onFacebook, onInstagram, onGithub } from 'src/app/utils/hrefs';

@Component({
  standalone: false,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly socials: {
    path: string;
    desc: string;
    alt: string;
    action: () => void;
  }[] = [
    {
      path: './assets/logos/facebook.svg',
      desc: 'Visit my facebook page',
      alt: 'Facebook logo',
      action: onFacebook,
    },
    {
      path: './assets/logos/instagram.svg',
      desc: 'Visit my instagram page',
      alt: 'Instagram logo',
      action: onInstagram,
    },
    {
      path: './assets/logos/github.svg',
      desc: 'Visit my github page',
      alt: 'GitHub logo',
      action: onGithub,
    },
  ];
}
