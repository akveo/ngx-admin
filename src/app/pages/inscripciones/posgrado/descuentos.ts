
export let DESCUENTOS = {
    titulo: 'Descuentos',
    clase: 'col-9',
    btn: 'Siguiente',
    alertas: true,
    btnLimpiar: 'Salir',
    modelo: 'Descuentos',
    campos: [
        /**
            <label class="cabecera">Indique cuales de estos descuentos posee,
            agregue el respectivo comprobante</label>
        **/
        {
            etiqueta: 'radio',
            nombre: 'Descuento1',
            label: 'Si usted es colombiano y mayor de edad, ¿Tiene usted el certi de votación de las últ elecciones?',
            placeholder: 'Seleccione la opción ...',
            requerido: true,
            valor: { Id: 1 },
            opciones: [
                { Id: 1, valor: 'Sí' },
                { Id: 2, valor: 'No' },
            ],
        }, {
            etiqueta: 'input',
            nombre: 'DocumentoDescuento1',
            label: 'Ingrese soporte',
            placeholder: 'Ingrese su soporte ...',
            requerido: true,
            tipo: 'file',
        }, {
            etiqueta: 'radio',
            nombre: 'Descuento2',
            label: '¿Ha utilizado algún beneficio y/o descuento para estudiar en la Universidad Distrital FJC?',
            placeholder: 'Seleccione la opción ...',
            requerido: true,
            valor: { Id: 1 },
            opciones: [
                { Id: 1, valor: 'Sí' },
                { Id: 2, valor: 'No' },
            ],
        }, {
            etiqueta: 'radio',
            nombre: 'Descuento2-1',
            label: '¿Es usted egresado de un pregrado de la Universidad Distrital FJC?',
            placeholder: 'Seleccione la opción ...',
            requerido: true,
            valor: { Id: 1 },
            opciones: [
                { Id: 1, valor: 'Sí' },
                { Id: 2, valor: 'No' },
            ],
        }, {
            etiqueta: 'radio',
            nombre: 'Descuento2-2',
            label: '¿Fue usted monitor académico o administrativo de la Universidad Distrital FJC?',
            placeholder: 'Seleccione la opción ...',
            requerido: true,
            valor: { Id: 1 },
            opciones: [
                { Id: 1, valor: 'Sí' },
                { Id: 2, valor: 'No' },
            ],
        }, {
            etiqueta: 'radio',
            nombre: 'Descuento2-3',
            label: '¿Fue usted representante est ante el CSU, consejo académico ó consejo de facultad de la UDFJC?',
            placeholder: 'Seleccione la opción ...',
            requerido: true,
            valor: { Id: 1 },
            opciones: [
                { Id: 1, valor: 'Sí' },
                { Id: 2, valor: 'No' },
            ],
        }, {
            etiqueta: 'radio',
            nombre: 'Descuento2-4',
            label: '¿Es usted personal de planta de la Universidad Distrital FJC ó familiar de uno de ellos?',
            placeholder: 'Seleccione la opción ...',
            requerido: true,
            valor: { Id: 1 },
            opciones: [
                { Id: 1, valor: 'Sí' },
                { Id: 2, valor: 'No' },
            ],
        }, {
            etiqueta: 'radio',
            nombre: 'Descuento2-5',
            label: '¿Es usted una persona becada por la prueba Saber-Pro (ECAES) de egresados de la UDFJC?',
            placeholder: 'Seleccione la opción ...',
            requerido: true,
            valor: { Id: 1 },
            opciones: [
                { Id: 1, valor: 'Sí' },
                { Id: 2, valor: 'No' },
            ],
        },
        /**
            <div class="seguir">
                <div class="col-xs-6 col-xs-offset-3">
                    <label class="progreso">
                        <progress max="100" value="64"></progress> 64%
                    </label>
                </div>
            </div>
        **/
    ],
}
