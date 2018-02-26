
export let DATOS_BASICOS = {
    tipo_formulario: 'basic',
    titulo: 'Datos básicos',
    alertas: true,
    modelo: 'Persona',
    campos: [{
        claseGrid : 'col-12',
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
        claseGrid : 'col-3',
        etiqueta: 'file',
        nombre: 'Foto',
        label: '* Foto',
        placeholder: 'Ingrese su foto',
        requerido: true,
        tipo: 'image',
        formatos: 'png, jpg, jpeg',
        tamanoMaximo: 2,
    }, {
        claseGrid : 'col-3',
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
        claseGrid : 'col-3',
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
        claseGrid : 'col-3',
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
        claseGrid : 'col-3',
        etiqueta: 'input',
        nombre: 'NumeroLibretaMilitar',
        label: 'Número de la libreta militar',
        placeholder: 'Ej. 55555555',
        requerido: false,
        tipo: 'number',
        minimo: 0,
    }, {
        claseGrid : 'col-3',
        etiqueta: 'select',
        nombre: 'EstadoCivil',
        label: '* Estado civil',
        placeholder: 'Seleccione ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
            { Id: 0, valor: 'Seleccione ...' },
            { Id: 1, valor: 'Soltero(a)' },
            { Id: 2, valor: 'Casado(a)' },
            { Id: 3, valor: 'Viudo(a)' },
            { Id: 4, valor: 'Unión libre' },
            { Id: 5, valor: 'Divorciado(a)' },
        ],
    }, {
        claseGrid : 'col-6',
        etiqueta: 'select',
        nombre: 'GrupoEtnico',
        label: '* Grupo étnico o de minoria al que pertenece',
        placeholder: 'Seleccione ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
            { Id: 0, valor: 'Seleccione ...' },
            { Id: 1, valor: 'No aplica' },
            { Id: 2, valor: 'Comunidad indígena' },
            { Id: 3, valor: 'Comunidad afrodescendiente' },
            { Id: 4, valor: 'Comunidad rom' },
            { Id: 4, valor: 'Comuidad gitana' },
            { Id: 4, valor: 'Comunidad raizal' },
            { Id: 4, valor: 'Comunidad palenquero' },
            { Id: 4, valor: 'Comunidad desplazada' },
        ],
    },
    /**
    <div class="discapacidad">
        <label for="discapacidad">* Tipos de discapacidad que posea</label>
        <br>
        <label class="custom-control custom-checkbox">
            <input class="custom-control-input" type="checkbox">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">
                Ninguna
            </span>
        </label>
        <label class="custom-control custom-checkbox">
            <input class="custom-control-input" type="checkbox">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">
                Discapacidad auditiva
            </span>
        </label>
        <label class="custom-control custom-checkbox">
            <input class="custom-control-input" type="checkbox">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">
                Discapacidad visual
            </span>
        </label>
        <label class="custom-control custom-checkbox">
            <input class="custom-control-input" type="checkbox">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">
                Discapacidad motriz
            </span>
        </label>
        <label class="custom-control custom-checkbox">
            <input class="custom-control-input" type="checkbox">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">
                Discapacidad intelectual
            </span>
        </label>
        <label class="custom-control custom-checkbox">
            <input class="custom-control-input" type="checkbox">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">
                Discapacidad visceral
            </span>
        </label>
    </div>
    **/
    {
        claseGrid : 'col-6',
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
        claseGrid : 'col-6',
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
        claseGrid : 'col-6',
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
        claseGrid : 'col-6',
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
        claseGrid : 'col-3',
        etiqueta: 'input',
        nombre: 'Direccion',
        label: '* Dirección',
        placeholder: 'Ej. Cll 123 # 123 - 123',
        requerido: true,
        tipo: 'text',
    }, {
        claseGrid : 'col-3',
        etiqueta: 'input',
        nombre: 'CodigoPostal',
        label: 'Código postal',
        placeholder: 'Ej. 555',
        requerido: false,
        tipo: 'number',
        minimo: 0,
    }, {
        claseGrid : 'col-3',
        etiqueta: 'input',
        nombre: 'Telefono',
        label: '* Teléfono',
        placeholder: 'Ej. 5525252',
        requerido: true,
        tipo: 'number',
        minimo: 100,
    }, {
        claseGrid : 'col-3',
        etiqueta: 'input',
        nombre: 'TelefonoContacto',
        label: '* Teléfono de contacto',
        placeholder: 'Ej. 5525252',
        requerido: true,
        tipo: 'number',
        minimo: 100,
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
