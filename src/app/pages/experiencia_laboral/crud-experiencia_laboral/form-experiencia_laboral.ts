export let FORM_EXPERIENCIA_LABORAL = {
  // titulo: 'ExperienciaLaboral',
  tipo_formulario: 'mini',
  alertas: true,
  btn: 'Guardar',
  modelo: 'InfoExperienciaLaboral',
  campos: [
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-5 col-md-5 col-sm-12 col-xs-12',
      nombre: 'NombreEmpresa',
      label_i18n: 'nombre_empresa',
      placeholder_i18n: 'nombre_empresa',
      requerido: true,
      deshabilitar: true,
      tipo: 'text',
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-5 col-md-5 col-sm-10 col-xs-10',
      nombre: 'Nit',
      label_i18n: 'nit',
      placeholder_i18n: 'nit',
      requerido: true,
      tipo: 'text',
    },
    {
      etiqueta: 'button',
      claseGrid: 'col-2',
      nombre: 'BusquedaBoton',
      claseBoton: 'btn btn-primary btn-sm',
      icono: 'fa fa-search',
    },
    {
      etiqueta: 'select',
      claseGrid: 'col-lg-4 col-md-4 col-sm-12 col-xs-12',
      nombre: 'TipoOrganizacion',
      label_i18n: 'tipo_organizacion',
      placeholder_i18n: 'tipo_organizacion',
      requerido: true,
      deshabilitar: true,
      key: 'Nombre',
      opciones: [],
    },
    {
      etiqueta: 'select',
      claseGrid: 'col-lg-4 col-md-4 col-sm-12 col-xs-12',
      nombre: 'Pais',
      label_i18n: 'pais_empresa',
      placeholder_i18n: 'pais_empresa',
      requerido: true,
      deshabilitar: true,
      tipo: 'Lugar',
      key: 'Nombre',
      opciones: [],
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-4 col-md-4 col-sm-12 col-xs-12',
      nombre: 'Direccion',
      label_i18n: 'direccion_empresa',
      placeholder_i18n: 'direccion_empresa',
      requerido: true,
      deshabilitar: true,
      tipo: 'text',
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
      nombre: 'Correo',
      label_i18n: 'correo_empresa',
      placeholder_i18n: 'correo_empresa',
      requerido: true,
      deshabilitar: true,
      tipo: 'email',
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
      nombre: 'Telefono',
      label_i18n: 'telefono_empresa',
      placeholder_i18n: 'telefono_empresa',
      requerido: true,
      deshabilitar: true,
      tipo: 'text',
    },
    {
      etiqueta: 'mat-date',
      claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
      nombre: 'FechaInicio',
      label_i18n: 'fecha_inicio',
      placeholder_i18n: 'fecha_inicio',
      requerido: true,
      tipo: 'date',
    },
    {
      etiqueta: 'mat-date',
      claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
      nombre: 'FechaFinalizacion',
      label_i18n: 'fecha_fin',
      placeholder_i18n: 'fecha_fin',
      requerido: true,
      tipo: 'date',
    },
    {
      etiqueta: 'select',
      claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
      nombre: 'TipoDedicacion',
      label_i18n: 'tipo_dedicacion',
      placeholder_i18n: 'tipo_dedicacion',
      requerido: true,
      tipo: 'text',
      key: 'Nombre',
      opciones: [],
    },
    {
      etiqueta: 'select',
      claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
      nombre: 'Cargo',
      label_i18n: 'cargo',
      placeholder_i18n: 'cargo',
      requerido: true,
      tipo: 'text',
      key: 'Nombre',
      opciones: [],
    },
    {
      etiqueta: 'select',
      claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
      nombre: 'TipoVinculacion',
      label_i18n: 'tipo_vinculacion',
      placeholder_i18n: 'tipo_vinculacion',
      requerido: true,
      tipo: 'text',
      key: 'Nombre',
      opciones: [],
    },
    {
      etiqueta: 'textarea',
      claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
      nombre: 'Actividades',
      label_i18n: 'descripcion_cargo',
      placeholder_i18n: 'descripcion_cargo',
      requerido: true,
      tipo: 'text',
    },
  ],
}
