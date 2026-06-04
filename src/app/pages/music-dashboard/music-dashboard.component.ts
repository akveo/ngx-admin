import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Song } from '../../@core/models';
import { MusicService } from '../../@core/services/music.service';
import { PlayerService } from '../../@core/services/player.service';
import { AuthLocalService } from '../../@core/services/auth-local.service';

@Component({
  selector: 'ngx-music-dashboard',
  templateUrl: './music-dashboard.component.html',
  styleUrls: ['./music-dashboard.component.scss'],
})
export class MusicDashboardComponent implements OnInit, OnDestroy {
  topSongs: Song[] = [];
  trendingArtists: { name: string; genre: string; songs: number }[] = [];
  loading = true;
  userName = '';
  private destroy$ = new Subject<void>();

  genreStats: { genre: string; count: number; percent: number }[] = [];

  constructor(
    private music: MusicService,
    public player: PlayerService,
    private auth: AuthLocalService,
  ) {}

  ngOnInit(): void {
    this.userName = this.auth.getCurrentUser()?.name || 'Usuario';
    this.music.getTopCharts().pipe(takeUntil(this.destroy$)).subscribe(songs => {
      this.topSongs = songs.slice(0, 10);
      this.loading = false;
      this.buildGenreStats(songs);
      this.buildTrendingArtists(songs);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private buildGenreStats(songs: Song[]): void {
    const counts: Record<string, number> = {};
    songs.forEach(s => {
      counts[s.primaryGenreName] = (counts[s.primaryGenreName] || 0) + 1;
    });
    const total = songs.length;
    this.genreStats = Object.entries(counts)
      .map(([genre, count]) => ({ genre, count, percent: Math.round((count / total) * 100) }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }

  private buildTrendingArtists(songs: Song[]): void {
    const map: Record<string, { genre: string; songs: number }> = {};
    songs.forEach(s => {
      if (!map[s.artistName]) map[s.artistName] = { genre: s.primaryGenreName, songs: 0 };
      map[s.artistName].songs++;
    });
    this.trendingArtists = Object.entries(map)
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.songs - a.songs)
      .slice(0, 5);
  }

  trackBySong(_: number, song: Song): number { return song.trackId; }
}
