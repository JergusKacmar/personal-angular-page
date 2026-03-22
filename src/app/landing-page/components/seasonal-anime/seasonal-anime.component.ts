import { animate, style, transition, trigger } from '@angular/animations';
import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { catchError, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  Anime,
  MyAnimeListService,
} from 'src/app/shared/services/my-anime-list.service';

@Component({
  selector: 'app-seasonal-anime',
  templateUrl: './seasonal-anime.component.html',
  styleUrls: ['./seasonal-anime.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SeasonalAnimeComponent {
  private animeService = inject(MyAnimeListService);

  readonly animeData = toSignal(
    this.animeService.getCurrentSeasonAnime().pipe(
      catchError(() => of([] as Anime[]))
    )
  );

  loading = computed(() => this.animeData() === undefined);

  
  // Skeleton cards and lines within them
  private readonly CARD_COUNT = 6;
  private readonly LINE_COUNT = 5;
  readonly skeletonCards = [...Array(this.CARD_COUNT).keys()];
  readonly skeletonLines = [...Array(this.LINE_COUNT).keys()];

  onAnimeClick(url: string): void {
    window.open(url, '_blank');
  }
}
