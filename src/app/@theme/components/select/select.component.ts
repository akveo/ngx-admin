import { Component, EventEmitter, Output, OnChanges, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-select',
    template: `
    <div class="{{campo.claseGrid}}">
        <div class="form-group">
            <label for="{{campo.nombre}}" class="form-control-label"><small>{{campo.label}}</small>
                <small id="{{campo.nombre}}" class="text-muted">
                    {{campo.alerta}}
                </small>
            </label>
            <select [(ngModel)]="campo.valor.Id" (ngModelChange)="validCampo()" class="{{campo.clase}}"
            [ngModelOptions]="{standalone: true}">
                <option class="{{campo.clase}}" *ngFor="let item of campo.opciones"
                [ngValue]="item.Id" [selected]="campo.valor.Id === item.Id">
                    {{item.valor}}
                </option>
            </select>
        </div>
    </div>
  `,
})
export class SelectComponent implements OnChanges, OnInit {

    ngOnInit(): void {
        if (!this.campo.valor) {
            this.campo.valor = { Id: 0 };
        }
        if (!this.campo.valor) {
            this.campo.valor = { Id: 0 };
        }
        this.campo.clase = 'form-control';
    }

    @Input('campo') campo: any;
    @Input('tipo') tipo: any;
    @Output('valor') valor: EventEmitter<any> = new EventEmitter();

    validCampo() {
        this.campo.valor = this.valor;
        if (this.campo.valor.Id !== 0) {
            this.valor.emit(this.campo);
        } else {
            this.valor.emit(false);
        }
    }

    ngOnChanges(changes) {
        this.campo = changes.campo.currentValue;
    }
}
