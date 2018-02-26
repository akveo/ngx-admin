
export let IDIOMAS = {
    titulo: 'Idiomas',
    clase: 'col-9',
    btn: 'Siguiente',
    alertas: true,
    btnLimpiar: 'Salir',
    modelo: 'Idiomas',
    campos: [
        /**
            <label class="cabecera">Para ingresar los idiomas los cuaes tenga conocimiento,
            ingrese la respectiva información y presione el botón agregar.
            Realizar esto por cada uno.</label>
        **/
        {
            etiqueta: 'select',
            nombre: 'Idioma',
            label: '* Idioma',
            placeholder: 'Seleccione el idioma ...',
            requerido: true,
            valor: { Id: 0 },
            opciones: [
                { Id: 0, valor: 'Seleccione el idioma ...' },
                { Id: 1, valor: 'Español' },
                { Id: 2, valor: 'Inglés' },
                { Id: 3, valor: 'Italiano' },
                { Id: 4, valor: 'Mandarín' },
                { Id: 5, valor: 'Portugués' },
                { Id: 6, valor: 'Ruso' },
            ],
        }, {
            etiqueta: 'select',
            nombre: 'IdiomaMaterno',
            label: '* ¿Es su idioma natal (idioma materno)?',
            placeholder: 'Seleccione ...',
            requerido: true,
            valor: { Id: 0 },
            opciones: [
                { Id: 0, valor: 'Seleccione ...' },
                { Id: 1, valor: 'Sí' },
                { Id: 2, valor: 'No' },
            ],
        }, {
            etiqueta: 'select',
            nombre: 'NivelHabla',
            label: '* Nivel de habla',
            placeholder: 'Seleccione el nivel de habla ...',
            requerido: true,
            valor: { Id: 0 },
            opciones: [
                { Id: 0, valor: 'Seleccione el nivel de habla ...' },
                { Id: 1, valor: 'Bajo' },
                { Id: 2, valor: 'Regular' },
                { Id: 3, valor: 'Alto' },
            ],
        }, {
            etiqueta: 'select',
            nombre: 'NivelEscucha',
            label: '* Nivel de escucha',
            placeholder: 'Seleccione el nivel de escucha ...',
            requerido: true,
            valor: { Id: 0 },
            opciones: [
                { Id: 0, valor: 'Seleccione el nivel de escucha ...' },
                { Id: 1, valor: 'Bajo' },
                { Id: 2, valor: 'Regular' },
                { Id: 3, valor: 'Alto' },
            ],
        }, {
            etiqueta: 'select',
            nombre: 'NivelEscritura',
            label: '* Nivel de escritura',
            placeholder: 'Seleccione el nivel de escritura ...',
            requerido: true,
            valor: { Id: 0 },
            opciones: [
                { Id: 0, valor: 'Seleccione el nivel de escritura ...' },
                { Id: 1, valor: 'Bajo' },
                { Id: 2, valor: 'Regular' },
                { Id: 3, valor: 'Alto' },
            ],
        }, {
            etiqueta: 'select',
            nombre: 'NivelLectura',
            label: '* Nivel de lectura',
            placeholder: 'Seleccione el nivel de lectura ...',
            requerido: true,
            valor: { Id: 0 },
            opciones: [
                { Id: 0, valor: 'Seleccione el nivel de lectura ...' },
                { Id: 1, valor: 'Bajo' },
                { Id: 2, valor: 'Regular' },
                { Id: 3, valor: 'Alto' },
            ],
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
