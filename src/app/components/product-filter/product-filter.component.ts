import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {

  searchText: string = '';
  selectedCategory: string = '';

  products: Product[] = [
    { id: 1, name: 'Crème hydratante', price: 12.5, category: 'Soin', stock: 10 },
    { id: 2, name: 'Gel douche', price: 5, category: 'Hygiène', stock: 0 },
    { id: 3, name: 'Vitamine C', price: 15, category: 'Compléments', stock: 3 },
    { id: 4, name: 'Shampoing', price: 8, category: 'Cheveux', stock: 7 },
    { id: 5, name: 'Brosse à dents', price: 2.5, category: 'Hygiène', stock: 2 }
  ];

  // Getter pour filtrer les produits
  get filteredProducts(): Product[] {
    const text = this.searchText.trim().toLowerCase();
    return this.products.filter(p => 
      p.name.toLowerCase().includes(text) &&
      (this.selectedCategory === '' || p.category === this.selectedCategory)
    );
  }

  // Compteurs
  get totalProducts(): number { return this.filteredProducts.length; }
  get outOfStock(): number { return this.filteredProducts.filter(p => p.stock === 0).length; }
  get lowStock(): number { return this.filteredProducts.filter(p => p.stock > 0 && p.stock < 5).length; }

  // Actions
  deleteAll() {
    if(confirm("Voulez-vous vraiment supprimer tous les produits ?")) {
      this.products = [];
    }
  }
}
