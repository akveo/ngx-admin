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
    title: 'Formacion Academica',
    icon: 'nb-compose',
    link: '/pages/formacion_academica',
    key: 'formacion_academica',
    children: [
      {
        title: 'Lista Formacion Academica',
        link: '/pages/formacion_academica/list-formacion_academica',
        key: 'lista_formacion_academica',
      },
      {
        title: 'CRUD Formacion Academica',
        link: '/pages/formacion_academica/crud-formacion_academica',
        key: 'crud_formacion_academica',
      },
    ],
  },
  {
    title: 'Idiomas',
    icon: 'nb-compose',
    link: '/pages/idiomas',
    key: 'idiomas',
    children: [
      {
        title: 'Lista Idiomas',
        link: '/pages/idiomas/list-idiomas',
        key: 'lista_idiomas',
      },
      {
        title: 'CRUD Idiomas',
        link: '/pages/idiomas/crud-idiomas',
        key: 'crud_idiomas',
      },
    ],
  },
  {
    title: 'Publicaciones',
    icon: 'nb-compose',
    link: '/pages/publicaciones',
    key: 'publicaciones',
    children: [
      {
        title: 'Lista Publicaciones',
        link: '/pages/publicaciones/list-publicaciones',
        key: 'lista_publicaciones',
      },
      {
        title: 'CRUD Publicaciones',
        link: '/pages/publicaciones/crud-publicaciones',
        key: 'crud_publicaciones',
      },
    ],
  },
  {
    title: 'Experiencia Laboral',
    icon: 'nb-compose',
    link: '/pages/experiencia_laboral',
    key: 'experiencia_laboral',
    children: [
      {
        title: 'Lista Experiencia Laboral',
        link: '/pages/experiencia_laboral/list-experiencia_laboral',
        key: 'lista_experiencia_laboral',
      },
      {
        title: 'CRUD Experiencia Laboral',
        link: '/pages/experiencia_laboral/crud-experiencia_laboral',
        key: 'crud_experiencia_laboral',
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
  {
    title: 'Info Caracteristica',
    icon: 'nb-compose',
    link: '/pages/info_caracteristica',
    key: 'info_caracteristica',
    children: [
      {
        title: 'Lista Info Caracteristica',
        link: '/pages/info_caracteristica/list-info_caracteristica',
        key: 'lista_info_caracteristica',
      },
      {
        title: 'CRUD Info Caracteristica',
        link: '/pages/info_caracteristica/crud-info_caracteristica',
        key: 'crud_info_caracteristica',
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
      {
        title: 'CRUD Lugar',
        link: '/pages/lugar/crud-lugar',
        key: 'crud_lugar',
      },
    ],
  },
  {
    title: 'Lugar Ubicacion',
    icon: 'nb-compose',
    link: '/pages/lugar_ubicacion',
    key: 'lugar_ubicacion',
    children: [
      {
        title: 'Lista Lugar Ubicacion',
        link: '/pages/lugar_ubicacion/list-lugar_ubicacion',
        key: 'lista_lugar_ubicacion',
      },
      {
        title: 'CRUD Lugar Ubicacion',
        link: '/pages/lugar_ubicacion/crud-lugar_ubicacion',
        key: 'crud_lugar_ubicacion',
      },
    ],
  },
  {
    title: 'Informacion Contacto',
    icon: 'nb-compose',
    link: '/pages/informacion_contacto',
    key: 'informacion_contacto',
    children: [
      {
        title: 'Lista Informacion Contacto',
        link: '/pages/informacion_contacto/list-informacion_contacto',
        key: 'lista_informacion_contacto',
      },
      {
        title: 'CRUD Informacion Contacto',
        link: '/pages/informacion_contacto/crud-informacion_contacto',
        key: 'crud_informacion_contacto',
      },
    ],
  },
]
