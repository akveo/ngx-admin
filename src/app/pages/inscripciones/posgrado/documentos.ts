
export let DOCUMENTOS = {
    titulo: 'Documentos',
    clase: 'col-9',
    btn: 'Siguiente',
    alertas: true,
    btnLimpiar: 'Salir',
    modelo: 'Documentos',
    campos: [
        {   etiqueta: 'file',
            nombre: 'Documento1',
            label: '1. Cédula de ciudadanía: descripción indicada del documento - 5 MB',
            placeholder: 'Ingrese su documento',
            requerido: true,
            formatos: 'pdf',
            tipo: 'application',
            tamanoMaximo: 5,
        },
        /**
            <div class="seguir">
                <div class="col-xs-6 col-xs-offset-3">
                    <label class="progreso">
                        <progress max="100" value="48"></progress> 48%
                    </label>
                </div>
            </div>
        **/
    ],
}
