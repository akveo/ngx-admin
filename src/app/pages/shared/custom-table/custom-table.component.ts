import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
  @Input() isLoading: boolean = false;
  @Input() emptyMessage: string = 'No se encontraron registros disponibles.';
}
