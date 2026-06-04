import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Song } from '../models';
import { environment } from '../../../environments/environment';

interface ItunesResponse {
  resultCount: number;
  results: ItunesTrack[];
}

interface ItunesTrack {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  previewUrl: string;
  primaryGenreName: string;
  trackTimeMillis: number;
  wrapperType: string;
  kind: string;
}

@Injectable({ providedIn: 'root' })
export class MusicService {
  private readonly searchUrl = environment.itunesApiUrl;

  constructor(private http: HttpClient) {}

  private mapTrack(track: ItunesTrack): Song {
    return {
      trackId: track.trackId,
      trackName: track.trackName,
      artistName: track.artistName,
      collectionName: track.collectionName || '',
      // Upgrade artwork resolution from 100x100 to 300x300 for better quality
      artworkUrl100: (track.artworkUrl100 || '').replace('100x100bb', '300x300bb'),
      previewUrl: track.previewUrl || '',
      primaryGenreName: track.primaryGenreName || 'Desconocido',
      trackTimeMillis: track.trackTimeMillis || 0,
    };
  }

  private query(term: string, limit = 20): Observable<Song[]> {
    const params = new HttpParams()
      .set('term', term)
      .set('media', 'music')
      .set('entity', 'song')
      .set('limit', String(limit))
      .set('explicit', 'No');

    return this.http.get<ItunesResponse>(this.searchUrl, { params }).pipe(
      map(res =>
        res.results
          .filter(r => r.wrapperType === 'track' && r.kind === 'song' && !!r.previewUrl)
          .map(r => this.mapTrack(r)),
      ),
      catchError(() => of([])),
    );
  }

  /** Busca canciones por nombre de canción o artista */
  search(term: string): Observable<Song[]> {
    const clean = term.trim();
    if (!clean) return of([]);
    return this.query(clean, 20);
  }

  /** Top hits del año actual para el catálogo principal */
  getCatalog(): Observable<Song[]> {
    return this.query('top hits 2024', 20);
  }

  /** Top charts para el dashboard */
  getTopCharts(): Observable<Song[]> {
    return this.query('billboard hot 100', 20);
  }

  /** Artistas en tendencia para el dashboard */
  getTrending(): Observable<Song[]> {
    return this.query('trending pop 2024', 10);
  }

  /** Canciones por artista específico */
  getSongsByArtist(artist: string): Observable<Song[]> {
    return this.query(artist, 10);
  }

  /** Canciones por género musical */
  getSongsByGenre(genre: string): Observable<Song[]> {
    return this.query(`${genre} music`, 20);
  }
}
