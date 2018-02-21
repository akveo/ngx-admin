
export let DATOS_PERSONALES = {
  titulo: 'Datos Personales',
  clase: 'col-8',
  alertas: true,
  modelo: 'Persona',
  campos: [
    {
      etiqueta: 'input',
      nombre: 'Telefono',
      label: 'Teléfono',
      placeholder: 'Ej. 110101',
      tipo: 'number',
      deshabilitar: true,
      requerido: true,
    },
    {
      etiqueta: 'input',
      nombre: 'TelefonoContacto',
      label: 'Teléfono de contacto',
      placeholder: 'Ej. 110101',
      tipo: 'number',
      requerido: true,
    },
    {
      etiqueta: 'input',
      nombre: 'Direccion',
      label: '* Dirección',
      placeholder: 'Ej. Cll 123 # 123 - 123',
      requerido: true,
    }, {
      etiqueta: 'input',
      nombre: 'CodigoPostal',
      label: 'Código postal',
      placeholder: 'Ej. 110101',
      tipo: 'number',
    }, {
      etiqueta: 'file',
      nombre: 'soporte',
      label: 'Soporte Documento',
      requerido: true,
      type: 'IMAGE'
    }, {
      etiqueta: 'select',
      nombre: 'GrupoSanguineo',
      label: 'Grupo sanguíneo',
      requerido: true,
      valor: { Id: 0 },
      opciones: [
        { Id: 0, valor: 'SELECCIONE ...' },
        { Id: 1, valor: 'A' },
        { Id: 2, valor: 'B' },
        { Id: 3, valor: 'AB' },
        { Id: 4, valor: 'O' },
      ],
    },
  ],
}
