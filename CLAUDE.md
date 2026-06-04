# SoundSphere — Contexto del Proyecto para Claude

## Descripción General

SoundSphere es una plataforma web de música construida sobre Angular 15 + Nebular UI (basada en ngx-admin). Permite a los usuarios explorar, buscar y reproducir previews de canciones via la iTunes Search API, gestionar favoritos y playlists, y a los administradores gestionar el catálogo.

**Repo:** https://github.com/DanteXhunter/SoundSphere  
**GitHub usuario del dev:** diegorojas13579  
**Framework:** Angular 15.2.10  
**UI:** Nebular 11.0.1 + Bootstrap 4.3.1  
**Charts:** ECharts, Chart.js, ngx-charts  

---

## Estrategia de Ramas

```
main          ← producción (alias de master)
staging       ← pre-producción (origin/staging)
dev           ← integración (origin/develop) ← base de features
diegorojas13579/us-XX-nombre  ← feature branches → PR a dev
```

Flujo: feature branch → PR → dev → PR → staging → PR → main

---

## Arquitectura del Proyecto

```
src/app/
├── @core/
│   ├── models/          ← interfaces TypeScript (Song, User, Playlist, Favorite)
│   ├── services/        ← servicios compartidos (music, auth-local, player, favorites, playlist, user)
│   ├── guards/          ← AuthGuard, AdminGuard
│   └── interceptors/    ← LocalAuthInterceptor (maneja auth con localStorage)
├── @theme/
│   ├── components/
│   │   ├── song-card/   ← tarjeta reutilizable de canción
│   │   └── mini-player/ ← reproductor global en el layout
│   └── layouts/         ← layouts existentes de Nebular
└── pages/
    ├── music/           ← módulo principal de música
    │   ├── catalog/     ← US-03: explorar canciones
    │   ├── search/      ← US-04: buscar canciones
    │   ├── favorites/   ← US-06: favoritos
    │   ├── playlists/   ← US-07: playlists (lista + detalle)
    │   └── music.module.ts
    ├── music-dashboard/ ← US-08: dashboard musical
    ├── profile/         ← US-09: gestión de perfil
    └── admin/
        └── songs/       ← US-10: gestión administrativa
```

---

## Servicios Clave

### `MusicService` (`@core/services/music.service.ts`)
Wrapper de la iTunes Search API (sin API key, CORS-free).
- `search(query: string): Observable<Song[]>`
- `getTopCharts(): Observable<Song[]>` — query "top hits" limit 20
- `getSongsByArtist(artist: string): Observable<Song[]>`

**Endpoint base:** `https://itunes.apple.com/search`  
**Parámetros:** `?term={query}&media=music&limit=20&entity=song`

### `AuthLocalService` (`@core/services/auth-local.service.ts`)
Autenticación con localStorage.
- Usuarios guardados en `soundsphere_users` (array de User)
- Usuario actual en `soundsphere_current_user`
- `register(name, email, password): boolean` — valida email único
- `login(email, password): User | null`
- `logout()`
- `getCurrentUser(): User | null`
- `isLoggedIn(): boolean`
- `isAdmin(): boolean`

### `PlayerService` (`@core/services/player.service.ts`)
Maneja reproducción de un solo audio a la vez.
- BehaviorSubject `currentSong$`, `isPlaying$`, `progress$`
- `play(song: Song)`, `pause()`, `toggle(song: Song)`
- Usa HTML5 Audio API

### `FavoritesService` (`@core/services/favorites.service.ts`)
Favoritos por usuario en localStorage (`soundsphere_favorites_{userId}`).
- `getFavorites(): Song[]`
- `addFavorite(song: Song)`
- `removeFavorite(trackId: number)`
- `isFavorite(trackId: number): boolean`
- `favorites$: BehaviorSubject<Song[]>`

### `PlaylistService` (`@core/services/playlist.service.ts`)
Playlists por usuario en localStorage (`soundsphere_playlists_{userId}`).
- `getPlaylists(): Playlist[]`
- `createPlaylist(name: string): Playlist`
- `deletePlaylist(id: string)`
- `addSongToPlaylist(playlistId: string, song: Song)`
- `removeSongFromPlaylist(playlistId: string, trackId: number)`
- `playlists$: BehaviorSubject<Playlist[]>`

---

## Modelos (`@core/models/`)

```typescript
// song.model.ts
export interface Song {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  previewUrl: string;
  primaryGenreName: string;
  trackTimeMillis: number;
}

// user.model.ts
export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // hashed simple (btoa)
  role: 'user' | 'admin';
  avatarUrl?: string;
  createdAt: string;
}

// playlist.model.ts
export interface Playlist {
  id: string;
  name: string;
  userId: string;
  songs: Song[];
  createdAt: string;
}
```

---

## Autenticación

- **No hay backend real** — todo en localStorage
- `LocalAuthInterceptor` intercepta `/api/auth/*` y responde con datos locales
- NbPasswordAuthStrategy configurado con endpoints `/api/auth/login` y `/api/auth/register`
- `AuthGuard` protege rutas `/pages/**`
- `AdminGuard` protege rutas `/pages/admin/**`
- Al hacer login exitoso, redirige a `/pages/music-dashboard`

---

## API Externa: iTunes Search API

```
GET https://itunes.apple.com/search?term=taylor+swift&media=music&limit=20&entity=song
```

Campos relevantes de respuesta:
- `trackId`, `trackName`, `artistName`, `collectionName`
- `artworkUrl100` → cambiar a `artworkUrl600` para mejor calidad
- `previewUrl` → URL de audio MP3 de 30 segundos
- `primaryGenreName`, `trackTimeMillis`

Sin CORS issues desde browser, sin API key requerida.

---

## User Stories Implementadas

| ID    | Feature                     | Rama                                           | Estado |
|-------|-----------------------------|------------------------------------------------|--------|
| US-01 | Registro de usuario         | diegorojas13579/us-01-registro-usuario         | TODO   |
| US-02 | Inicio de sesión            | diegorojas13579/us-02-inicio-sesion            | TODO   |
| US-03 | Explorar canciones          | diegorojas13579/us-03-explorar-canciones       | TODO   |
| US-04 | Buscar canciones            | diegorojas13579/us-04-buscar-canciones         | TODO   |
| US-05 | Reproducir preview musical  | diegorojas13579/us-05-reproducir-preview       | TODO   |
| US-06 | Agregar favoritos           | diegorojas13579/us-06-agregar-favoritos        | TODO   |
| US-07 | Crear playlists             | diegorojas13579/us-07-crear-playlists          | TODO   |
| US-08 | Dashboard musical           | diegorojas13579/us-08-dashboard-musical        | TODO   |
| US-09 | Gestión de perfil           | diegorojas13579/us-09-gestion-perfil           | TODO   |
| US-10 | Gestión admin canciones     | diegorojas13579/us-10-gestion-admin-canciones  | TODO   |

---

## Comandos Útiles

```bash
npm start              # dev server en http://localhost:4200
npm run build          # build
npm test               # tests con Karma/Jasmine
ng generate component pages/music/catalog  # generar componente
```

---

## Convenciones

- SCSS por componente (no global CSS)
- Nebular components primero (NbCardModule, NbButtonModule, etc.)
- Servicios en `@core/services/`, guards en `@core/guards/`
- Lazy loading para todos los módulos de páginas
- `trackBy` en `*ngFor` con arrays de canciones
- Unsubscribe con `takeUntil(this.destroy$)` en componentes
- No usar `any` — usar interfaces tipadas

---

## Notas Importantes

- El proyecto base es ngx-admin, un admin dashboard template. Adaptamos la UI para música.
- La ruta `/pages/dashboard` era el e-commerce dashboard — se reemplaza con `music-dashboard`.
- Los menús están en `src/app/pages/pages-menu.ts` — actualizar con las nuevas rutas musicales.
- El layout principal es `OneColumnLayoutComponent` — el mini-player se inyecta en el footer.
- `NbToastrService` para mensajes de éxito/error.
- `NbDialogService` para confirmaciones de eliminación.
