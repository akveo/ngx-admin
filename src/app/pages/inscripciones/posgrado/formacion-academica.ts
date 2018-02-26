
export let FORMACION_ACADEMICA = {
    titulo: 'Formación académica',
    clase: 'col-9',
    btn: 'Siguiente',
    alertas: true,
    btnLimpiar: 'Salir',
    modelo: 'FormacionAcademica',
    campos: [
        /**
            <label class="cabecera">Para ingresar la formación académica,
            ingrese la respectiva información y presione el botón agregar.
            Realizar esto por cada estudio que posea.</label>
        **/
        {
            etiqueta: 'select',
            nombre: 'NivelFormacion',
            label: '* Nivel de formación',
            placeholder: 'Seleccione el nivel de formación ...',
            requerido: true,
            valor: { Id: 0 },
            opciones: [
                { Id: 0, valor: 'Seleccione el nivel de formación ...' },
                { Id: 1, valor: 'Profesional' },
                { Id: 2, valor: 'Diplomado' },
                { Id: 3, valor: 'Especialización' },
                { Id: 4, valor: 'Maestría' },
                { Id: 5, valor: 'Doctorado' },
            ],
        }, {
            etiqueta: 'input',
            nombre: 'AnioInicio',
            label: '* Año de inicio',
            placeholder: 'Ej. 2018',
            requerido: true,
            tipo: 'number',
            minimo: 1900,
        }, {
            etiqueta: 'input',
            nombre: 'AnioGrado',
            label: '* Año de graduación',
            placeholder: 'Ej. 2018',
            requerido: true,
            tipo: 'number',
            minimo: 1900,
        }, {
            etiqueta: 'select',
            nombre: 'PaisUniversidad',
            label: '* País de la universidad',
            placeholder: 'Seleccione el país de la universidad ...',
            requerido: true,
            valor: { Id: 0 },
            opciones: [
                { Id: 0, valor: 'Seleccione el país de la universidad ...' },
                { Id: 1, valor: 'Perú' },
                { Id: 2, valor: 'Chile' },
                { Id: 3, valor: 'Colombia' },
                { Id: 4, valor: 'Rusia' },
            ],
        }, {
            etiqueta: 'select',
            nombre: 'CiudadUniversidad',
            label: '* Ciudad de la universidad',
            placeholder: 'Seleccione la ciudad de la universidad ...',
            requerido: true,
            valor: { Id: 0 },
            opciones: [
                { Id: 0, valor: 'Seleccione la ciudad de la universidad ...' },
                { Id: 1, valor: 'AAA' },
                { Id: 2, valor: 'BBB' },
                { Id: 3, valor: 'CCC' },
                { Id: 4, valor: 'DDD' },
            ],
        }, {
            etiqueta: 'input',
            nombre: 'NombreUniversidad',
            label: '* Nombre de la universidad',
            placeholder: 'Ej. Universidad Distrital Francisco José de Caldas',
            requerido: true,
            tipo: 'text',
        }, {
            etiqueta: 'select',
            nombre: 'Modalidad',
            label: '* Modalidad de estudio',
            placeholder: 'Seleccione la modalidad de estudio ...',
            requerido: true,
            valor: { Id: 0 },
            opciones: [
                { Id: 0, valor: 'Seleccione la modalidad de estudio ...' },
                { Id: 1, valor: 'Presencial' },
                { Id: 2, valor: 'A distancia' },
                { Id: 3, valor: 'Virtual' },
            ],
        }, {
            etiqueta: 'input',
            nombre: 'TituloGrado',
            label: '* Título de grado',
            placeholder: 'Ej. Licenciado de física',
            requerido: true,
            tipo: 'text',
        }, {
            etiqueta: 'input',
            nombre: 'TituloTrabajoGrado',
            label: '* Título del trabajo de grado',
            placeholder: 'Ingrese el título de su trabajo de grado ...',
            requerido: true,
            tipo: 'text',
        }, {
            etiqueta: 'textarea',
            nombre: 'DescripcionTrabajoGrado',
            label: '* Síntesis del trabajo de grado',
            placeholder: 'Ingrese una breve descripción del trabajo de grado ...',
            requerido: true,
            /**
                rows="5"
            **/
        },
        /**
            <div class="agregar">
                <input class="btn btn-success" type="button" value="Agregar información">
            </div>
            <hr>
            <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)">
            </ng2-smart-table>
            <hr>
            <div class="seguir">
                <div class="col-xs-6 col-xs-offset-3">
                    <label class="progreso">
                        <progress max="100" value="16"></progress> 16%
                    </label>
                </div>
            </div>
        **/
    ],
}
