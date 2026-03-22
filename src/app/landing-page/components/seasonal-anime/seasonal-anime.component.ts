import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import {
  Anime,
  MyAnimeListService,
} from 'src/app/shared/services/my-anime-list.service';

@Component({
  selector: 'app-seasonal-anime',
  templateUrl: './seasonal-anime.component.html',
  styleUrls: ['./seasonal-anime.component.scss'],
  imports: [CommonModule],
  animations: [
    trigger('fade', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SeasonalAnimeComponent implements OnInit {
  private animeService = inject(MyAnimeListService);

  loading = true;
  animes!: Promise<Anime[]>;
  readonly skeletonCards = [...Array(6).keys()];
  readonly skeletonLines = [...Array(5).keys()];

  ngOnInit() {
    this.animes = firstValueFrom(
      this.animeService.getCurrentSeasonAnime()
    )
      .catch(() => [] as Anime[])
      .finally(() => (this.loading = false));
  }

  onAnimeClick(url: string): void {
    window.open(url, '_blank');
  }
}
