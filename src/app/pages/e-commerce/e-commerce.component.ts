import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ProductsService } from '../../services/products/products.service';
import { ProductWindowComponent } from './product-window/product-window.component';

@Component({
  selector: 'ngx-e-commerce',
  templateUrl: './e-commerce.component.html'
})
export class ECommerceComponent implements OnInit {

  products: any[] = [];

  searchId: number | null = null;
  deleteId: number | null = null;
  updateId: number | null = null;

  get summaryEntries() {
    return [
      { label: 'Products loaded', value: this.products.length },
      { label: 'Search ID', value: this.searchId || '-' },
      { label: 'Current mode', value: 'CRUD playground' },
    ];
  }

  newProduct = {
    title: '',
    price: 0
  };

  updateData = {
    title: ''
  };

  constructor(private productsService: ProductsService,
              private dialogService: NbDialogService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data.products;
    });
  }

  getProductById(): void {
    if (!this.searchId) return;
    this.productsService.getProductById(this.searchId)
      .subscribe(data => {
        console.log('GET BY ID', data);
        this.dialogService.open(ProductWindowComponent, {
          context: { 
            product: data, 
            action: 'view',
            title: `Producto #${data.id}` // Movido al context
          },
          hasBackdrop: true,
          closeOnEsc: true,
          closeOnBackdropClick: true,
        });
      });
  }

  addProduct(): void {
    this.productsService.createProduct(this.newProduct)
      .subscribe(data => {
        console.log('CREATED', data);
        this.dialogService.open(ProductWindowComponent, {
          context: { 
            product: data, 
            action: 'create',
            title: 'Producto Creado' // Movido al context
          },
          hasBackdrop: true,
          closeOnEsc: true,
          closeOnBackdropClick: true,
        });
        this.loadProducts();
      });
  }

  updateProduct(): void {
    if (!this.updateId) return;
    this.productsService.updateProduct(
      this.updateId,
      this.updateData
    ).subscribe(data => {
      console.log('UPDATED', data);
      this.dialogService.open(ProductWindowComponent, {
        context: { 
          product: data, 
          action: 'update',
          title: 'Producto Actualizado' // Movido al context
        },
        hasBackdrop: true,
        closeOnEsc: true,
        closeOnBackdropClick: true,
      });
      this.loadProducts();
    });
  }

  deleteProduct(): void {
    if (!this.deleteId) return;
    this.productsService.deleteProduct(this.deleteId)
      .subscribe(data => {
        console.log('DELETED', data);
        this.dialogService.open(ProductWindowComponent, {
          context: { 
            product: data, 
            action: 'delete',
            title: `Producto Eliminado` 
          },
          hasBackdrop: true,
          closeOnEsc: true,
          closeOnBackdropClick: true,
        });
        
        this.loadProducts(); 
      });
  }
}