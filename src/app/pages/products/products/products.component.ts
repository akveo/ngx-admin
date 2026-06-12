import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      console.log('Products:', data);
      this.products = data.products;
    });
  }

  // Método temporal para el botón del Header
  onAddProduct(): void {
    console.log('Abrir formulario o modal para nuevo producto');
  }
}