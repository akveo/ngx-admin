import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'ngx-e-commerce',
  templateUrl: './e-commerce.component.html'
})
export class ECommerceComponent implements OnInit {

  products: any[] = [];

  selectedId = 1;

  get summaryEntries() {
    return [
      { label: 'Products loaded', value: this.products.length },
      { label: 'Selected ID', value: this.selectedId },
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

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data.products;
    });
  }

  getProductById(): void {
    this.productsService.getProductById(this.selectedId)
      .subscribe(data => {
        console.log('GET BY ID', data);
        alert(`Found: ${data.title}`);
      });
  }

  addProduct(): void {
    this.productsService.createProduct(this.newProduct)
      .subscribe(data => {
        console.log('CREATED', data);
        alert(`Created: ${data.title}`);
      });
  }

  updateProduct(): void {
    this.productsService.updateProduct(
      this.selectedId,
      this.updateData
    ).subscribe(data => {
      console.log('UPDATED', data);
      alert(`Updated: ${data.title}`);
    });
  }

  deleteProduct(): void {
    this.productsService.deleteProduct(this.selectedId)
      .subscribe(data => {
        console.log('DELETED', data);
        alert(`Deleted Product ID ${data.id}`);
      });
  }
}
