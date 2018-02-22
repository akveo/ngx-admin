
export let DATOS_BASICOS = {
    titulo: 'Datos básicos',
    clase: 'col-9',
    btn: 'Siguiente',
    alertas: true,
    btnLimpiar: 'Salir',
    modelo: 'Persona',
    campos: [{
        etiqueta: 'select',
        nombre: 'Programa',
        label: '* Programa al que aspira',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
            { Id: 0, valor: 'Seleccione el programa ...' },
            { Id: 1, valor: 'Ciencias - Facultad de ciencias' },
            { Id: 2, valor: 'Educación - Facultad de educación' },
            { Id: 3, valor: 'Ingeniería - Facultad de ingeniería' },
        ],
    }, {
        etiqueta: 'file',
        nombre: 'Foto',
        label: '* Foto',
        placeholder: 'Ingrese su foto',
        requerido: true,
        tipo: 'image',
        formatos: 'png, jpg, jpeg',
        tamanoMaximo: 2,
    }, {
        etiqueta: 'select',
        nombre: 'GrupoSanguineo',
        label: '* Grupo sanguíneo',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
            { Id: 0, valor: 'Seleccione su grupo sanguíneo ...' },
            { Id: 1, valor: 'A' },
            { Id: 2, valor: 'AB' },
            { Id: 3, valor: 'B' },
            { Id: 4, valor: 'O' },
        ],
    }, {
        etiqueta: 'select',
        nombre: 'RH',
        label: '* RH',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
            { Id: 0, valor: 'Seleccione su RH ...' },
            { Id: 1, valor: 'Positivo' },
            { Id: 2, valor: 'Negativo' },
        ],
    }, {
        etiqueta: 'select',
        nombre: 'TipoLibretaMilitar',
        label: 'Tipo de libreta militar',
        requerido: false,
        valor: { Id: 0 },
        opciones: [
            { Id: 0, valor: 'Seleccione su tipo de libreta ...' },
            { Id: 1, valor: 'Primera clase' },
            { Id: 2, valor: 'Segunda clase' },
        ],
    }, {
        etiqueta: 'input',
        nombre: 'NumeroLibretaMilitar',
        label: 'Número de la libreta militar',
        placeholder: 'Ej. 55555555',
        requerido: false,
        tipo: 'number',
        minimo: 0,
        /**
         * min="10000000"
         * max="100000000000000000000"
         * step="1"
         **/
    }, {
        etiqueta: 'select',
        nombre: 'PaisNacimiento',
        label: '* País de nacimiento',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
            { Id: 0, valor: 'Seleccione su país de nacimiento ...' },
            { Id: 1, valor: 'Perú' },
            { Id: 2, valor: 'Chile' },
            { Id: 3, valor: 'Colombia' },
            { Id: 4, valor: 'Rusia' },
        ],
    }, {
        etiqueta: 'select',
        nombre: 'CiudadNacimiento',
        label: '* Ciudad de nacimiento',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
            { Id: 0, valor: 'Seleccione su ciudad de nacimiento ...' },
            { Id: 1, valor: 'AAA' },
            { Id: 2, valor: 'BBB' },
            { Id: 3, valor: 'CCC' },
            { Id: 4, valor: 'DDD' },
        ],
    }, {
        etiqueta: 'select',
        nombre: 'PaisResidencia',
        label: '* País de residencia',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
            { Id: 0, valor: 'Seleccione su país de residencia ...' },
            { Id: 1, valor: 'Perú' },
            { Id: 2, valor: 'Chile' },
            { Id: 3, valor: 'Colombia' },
            { Id: 4, valor: 'Rusia' },
        ],
    }, {
        etiqueta: 'select',
        nombre: 'CiudadResidencia',
        label: '* Ciudad de residencia',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
            { Id: 0, valor: 'Seleccione su ciudad de residencia ...' },
            { Id: 1, valor: 'AAA' },
            { Id: 2, valor: 'BBB' },
            { Id: 3, valor: 'CCC' },
            { Id: 4, valor: 'DDD' },
        ],
    }, {
        etiqueta: 'input',
        nombre: 'Direccion',
        label: '* Dirección',
        placeholder: 'Ej. Cll 123 # 123 - 123',
        requerido: true,
        tipo: 'text',
    }, {
        etiqueta: 'input',
        nombre: 'CodigoPostal',
        label: 'Código postal',
        placeholder: 'Ej. 555',
        requerido: false,
        tipo: 'number',
        minimo: 0,
        /**
         * min="100"
         * max="100000"
         * step="1"
         **/
    }, {
        etiqueta: 'input',
        nombre: 'Telefono',
        label: '* Teléfono',
        placeholder: 'Ej. 5525252',
        requerido: true,
        tipo: 'number',
        minimo: 0,
        /**
         * min="100"
         * max="100000000000000000000"
         * step="1"
         **/
    }, {
        etiqueta: 'input',
        nombre: 'TelefonoContacto',
        label: '* Teléfono de contacto',
        placeholder: 'Ej. 5525252',
        requerido: true,
        tipo: 'number',
        minimo: 0,
        /**
         * min="100"
         * max="100000000000000000000"
         * step="1"
         **/
    }],
    /**
        <div class="seguir">
            <div class="col-xs-6 col-xs-offset-3">
                <label class="progreso">
                    <progress max="100" value="0"></progress> 0%
                </label>
            </div>
        </div>
    **/
}
