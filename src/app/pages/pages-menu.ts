import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Detection List',
    icon: 'list-outline',
    link: '',
  },
  {
    title: 'Report',
    group: true,
  },
  {
    title: 'SERP & Keywords',
    icon: 'file-text-outline',
    link: '',
  },
  {
    title: 'Crawler Status',
    icon: 'file-text-outline',
    link: '',
  },
  {
    title: 'Scoring Analysis',
    icon: 'file-text-outline',
    link: '',
  },
  {
    title: 'Settings',
    group: true,
  },
  {
    title: 'Keywords Dictionary',
    icon: 'book-outline',
    link: '/pages/settings/keywordsdictionary',
  },
  {
    title: 'Image Similarity',
    icon: 'image-outline',
    link: '/pages/settings/imagesimilarity',
  },
  {
    title: 'SERP',
    icon: 'settings-2-outline',
    link: '/pages/ui-features/icons',
  },
  {
    title: 'Crawler',
    icon: 'settings-2-outline',
    link: '/pages/ui-features/icons',
  },
  {
    title: 'Api Account',
    icon: 'people-outline',
    link: '/pages/ui-features/icons',
  },
];
