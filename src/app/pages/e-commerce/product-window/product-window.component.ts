import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-product-window',
  templateUrl: './product-window.component.html',
  styleUrls: ['./product-window.component.scss'],
})
export class ProductWindowComponent {
  
  @Input() title!: string; 
  @Input() product: any;
  @Input() action: 'view' | 'create' | 'update' | 'delete' = 'view';

  constructor(public dialogRef: NbDialogRef<any>) {}

  close(): void {
    this.dialogRef.close();
  }

  get actionTitle(): string {
    const titles = {
      view: 'Ver Producto',
      create: 'Crear Producto',
      update: 'Actualizar Producto',
      delete: 'Producto Eliminado', // <-- Nuevo
    };
    return titles[this.action];
  }

  get actionIcon(): string {
    const icons = {
      view: 'shopping-cart-outline',
      create: 'plus-circle-outline',
      update: 'edit-outline',
      delete: 'trash-2-outline', // <-- Nuevo (Ícono de basurero de Eva Icons)
    };
    return icons[this.action];
  }

  get actionColor(): string {
    const colors = {
      view: '#3b82f6',
      create: '#10b981',
      update: '#f59e0b',
      delete: '#ef4444', // <-- Nuevo (Rojo)
    };
    return colors[this.action];
  }
}