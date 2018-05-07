
export let FORM_INFO_CARACTERISTICA = {
    titulo: 'InfoCaracteristica',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'InfoCaracteristica',
    campos: [
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'GrupoSanguineo',
        label_i18n: 'grupo_sanguineo',
        placeholder_i18n: 'grupo_sanguineo',
        requerido: true,
        tipo: 'text',
        opciones: ['O', 'A', 'B', 'AB'],
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'Rh',
        label_i18n: 'rh',
        placeholder_i18n: 'rh',
        requerido: true,
        tipo: 'text',
        opciones: ['+', '-'],
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'GrupoEtnico',
        label_i18n: 'grupo_etnico',
        placeholder_i18n: 'grupo_etnico',
        requerido: true,
        tipo: 'GrupoEtnico',
        // key: 'Name',
        opciones: [],
    },
    {
        etiqueta: 'selectmultiple',
        claseGrid: 'col-6',
        nombre: 'TipoDiscapacidad',
        label_i18n: 'tipo_discapacidad',
        placeholder_i18n: 'tipo_discapacidad',
        requerido: true,
        tipo: 'TipoDiscapacidad',
        // key: 'Name',
        opciones: [],
    },
    ],
}
