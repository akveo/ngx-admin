import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Song } from '../../../@core/models';
import { FavoritesService } from '../../../@core/services/favorites.service';
import { PlayerService } from '../../../@core/services/player.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favorites: Song[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    public favoritesService: FavoritesService,
    public player: PlayerService,
    private toastr: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.favoritesService.favorites$
      .pipe(takeUntil(this.destroy$))
      .subscribe(favs => this.favorites = favs);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  remove(trackId: number): void {
    this.favoritesService.removeFavorite(trackId);
    this.toastr.info('Eliminado de favoritos', 'Favoritos');
  }

  trackBySong(_: number, song: Song): number { return song.trackId; }
}
