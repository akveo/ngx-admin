
export let FORMACION_LABORAL = {
    titulo: 'Formación laboral',
    clase: 'col-6',
    btn: 'Siguiente',
    alertas: true,
    btnLimpiar: 'Salir',
    modelo: 'FormacionLaboral',
    campos: [
        /**
            <label class="cabecera">Para ingresar la formación laboral,
            ingrese la respectiva información y presione el botón agregar.
            Realizar esto por cada labor desempeñada.</label>
        **/
        {
            etiqueta: 'input',
            nombre: 'NombreEmpresa',
            label: '* Nombre de la empresa',
            placeholder: 'Ej. Empresa S.A.',
            requerido: true,
            tipo: 'text',
        }, {
            etiqueta: 'input',
            nombre: 'DireccionEmpresa',
            label: '* Dirección de la empresa',
            placeholder: 'Ej. Cll 123 # 123 - 123',
            requerido: true,
            tipo: 'text',
        }, {
            etiqueta: 'input',
            nombre: 'EmailEmpresa',
            label: '* Correo electrónico de la empresa',
            placeholder: 'Ej. algo@algo.com',
            requerido: true,
            tipo: 'email',
        }, {
            etiqueta: 'input',
            nombre: 'TelefonoEmpresa',
            label: '* Teléfono de la empresa',
            placeholder: 'Ej. 55555555',
            requerido: true,
            tipo: 'number',
            /**
             * min="10000000"
             * max="100000000000000000000"
             * step="1"
             **/
        }, {
            etiqueta: 'input',
            nombre: 'FechaInicio',
            label: '* Fecha de inicio',
            placeholder: 'Ej. 01/01/2010',
            requerido: true,
            tipo: 'date',
        }, {
            etiqueta: 'input',
            nombre: 'FechaFin',
            label: 'Fecha de finalizaión',
            placeholder: 'Ej. 01/01/2010',
            requerido: false,
            tipo: 'date',
        }, {
            etiqueta: 'input',
            nombre: 'Cargo',
            label: '* Cargo desempeñado',
            placeholder: 'Ej. Docente',
            requerido: true,
            tipo: 'text',
        }, {
            etiqueta: 'textarea',
            nombre: 'DescripcionCargo',
            label: '* Descripción del cargo y sus funciones',
            placeholder: 'Ingrese una breve descripción del cargo desempeñado ...',
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
                        <progress max="100" value="32"></progress> 32%
                    </label>
                </div>
            </div>
        **/
    ],
}
