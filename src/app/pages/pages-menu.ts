import { MenuItem } from './menu-item';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
    key: 'dashboard',
  },
  {
    title: 'Genero',
    icon: 'nb-compose',
    link: '/pages/genero',
    key: 'genero',
    children: [
      {
        title: 'Lista Genero',
        link: '/pages/genero/list-genero',
        key: 'lista_genero',
      },
      {
        title: 'CRUD Genero',
        link: '/pages/genero/crud-genero',
        key: 'crud_genero',
      },
    ],
  },
  {
    title: 'Grupo Etnico',
    icon: 'nb-compose',
    link: '/pages/grupo_etnico',
    key: 'grupo_etnico',
    children: [
      {
        title: 'Lista Grupo Etnico',
        link: '/pages/grupo_etnico/list-grupo_etnico',
        key: 'lista_grupo_etnico',
      },
      {
        title: 'CRUD Grupo Etnico',
        link: '/pages/grupo_etnico/crud-grupo_etnico',
        key: 'crud_grupo_etnico',
      },
    ],
  },
  {
    title: 'Estado Civil',
    icon: 'nb-compose',
    link: '/pages/estado_civil',
    key: 'estado_civil',
    children: [
      {
        title: 'Lista Estado Civil',
        link: '/pages/estado_civil/list-estado_civil',
        key: 'lista_estado_civil',
      },
      {
        title: 'CRUD Estado Civil',
        link: '/pages/estado_civil/crud-estado_civil',
        key: 'crud_estado_civil',
      },
    ],
  },
  {
    title: 'Tipo Discapacidad',
    icon: 'nb-compose',
    link: '/pages/tipo_discapacidad',
    key: 'tipo_discapacidad',
    children: [
      {
        title: 'Lista Tipo Discapacidad',
        link: '/pages/tipo_discapacidad/list-tipo_discapacidad',
        key: 'lista_tipo_discapacidad',
      },
      {
        title: 'CRUD Tipo Discapacidad',
        link: '/pages/tipo_discapacidad/crud-tipo_discapacidad',
        key: 'crud_tipo_discapacidad',
      },
    ],
  },
  {
    title: 'Persona',
    icon: 'nb-compose',
    link: '/pages/persona',
    key: 'persona',
    children: [
      {
        title: 'Lista Persona',
        link: '/pages/persona/list-persona',
        key: 'lista_persona',
      },
      {
        title: 'CRUD Persona',
        link: '/pages/persona/crud-persona',
        key: 'crud_persona',
      },
    ],
  },
  {
    title: 'Info Persona',
    icon: 'nb-compose',
    link: '/pages/info_persona',
    key: 'info_persona',
    children: [
      {
        title: 'Lista Info Persona',
        link: '/pages/info_persona/list-info_persona',
        key: 'lista_info_persona',
      },
      {
        title: 'CRUD Info Persona',
        link: '/pages/info_persona/crud-info_persona',
        key: 'crud_info_persona',
      },
    ],
  },
]
