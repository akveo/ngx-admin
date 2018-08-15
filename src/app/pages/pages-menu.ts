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
    title: 'Inscripcion',
    icon: 'nb-compose',
    link: '/pages/inscripcion',
    key: 'inscripcion',
    children: [
      {
        title: 'Posgrado',
        link: '/pages/inscripcion/posgrado',
        key: 'inscripcion_posgrado',
      },
    ],
  },
  {
    title: 'Parametricas',
    icon: 'nb-compose',
    link: '/pages/parametricas',
    key: 'parametricas',
    children: [
      {
        title: 'Genero',
        link: '/pages/genero/list-genero',
        key: 'genero',
      },
      {
        title: 'Grupo Etnico',
        link: '/pages/grupo_etnico/list-grupo_etnico',
        key: 'grupo_etnico',
      },
      {
        title: 'Estado Civil',
        link: '/pages/estado_civil/list-estado_civil',
        key: 'estado_civil',
      },
      {
        title: 'Tipo Discapacidad',
        link: '/pages/tipo_discapacidad/list-tipo_discapacidad',
        key: 'tipo_discapacidad',
      },
      {
        title: 'Tipo Lugar',
        link: '/pages/tipo_lugar/list-tipo_lugar',
        key: 'tipo_lugar',
      },
      {
        title: 'Tipo Contacto',
        link: '/pages/tipo_contacto/list-tipo_contacto',
        key: 'tipo_contacto',
      },
    ],
  },
  /*{
    title: 'Tipo Lugar',
    icon: 'nb-compose',
    link: '/pages/tipo_lugar',
    key: 'tipo_lugar',
    children: [
      {
        title: 'Lista Tipo Lugar',
        link: '/pages/tipo_lugar/list-tipo_lugar',
        key: 'lista_tipo_lugar',
      },
      {
        title: 'CRUD Tipo Lugar',
        link: '/pages/tipo_lugar/crud-tipo_lugar',
        key: 'crud_tipo_lugar',
      },
    ],
  },
  {
    title: 'Tipo Contacto',
    icon: 'nb-compose',
    link: '/pages/tipo_contacto',
    key: 'tipo_contacto',
    children: [
      {
        title: 'Lista Tipo Contacto',
        link: '/pages/tipo_contacto/list-tipo_contacto',
        key: 'lista_tipo_contacto',
      },
      {
        title: 'CRUD Tipo Contacto',
        link: '/pages/tipo_contacto/crud-tipo_contacto',
        key: 'crud_tipo_contacto',
      },
    ],
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
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
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
  },*/
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
    title: 'Lugar',
    icon: 'nb-compose',
    link: '/pages/lugar',
    key: 'lugar',
    children: [
      {
        title: 'Lista Lugar',
        link: '/pages/lugar/list-lugar',
        key: 'lista_lugar',
      },
    ],
  },
]
