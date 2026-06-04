import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/music-dashboard',
    home: true,
  },
  {
    title: 'MÚSICA',
    group: true,
  },
  {
    title: 'Explorar',
    icon: 'compass-outline',
    link: '/pages/music/catalog',
  },
  {
    title: 'Buscar',
    icon: 'search-outline',
    link: '/pages/music/search',
  },
  {
    title: 'Favoritos',
    icon: 'heart-outline',
    link: '/pages/music/favorites',
  },
  {
    title: 'Playlists',
    icon: 'music-outline',
    link: '/pages/music/playlists',
  },
  {
    title: 'MI CUENTA',
    group: true,
  },
  {
    title: 'Mi Perfil',
    icon: 'person-outline',
    link: '/pages/profile',
  },
  {
    title: 'ADMINISTRACIÓN',
    group: true,
  },
  {
    title: 'Gestión de Canciones',
    icon: 'settings-2-outline',
    link: '/pages/admin/songs',
  },
];
