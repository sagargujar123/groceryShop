import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { OrdersService } from '../orders.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  itemsInCart: any=0;
  selectedProduct: any;

  constructor(private productservice: ProductServiceService, private orderservice: OrdersService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productservice.getProductList().subscribe((result) => {
      this.products = result;
      console.log("avail products: ", this.products);
    });
  }

  //products added in cart
  addToCart(product: any) {
    this.selectedProduct = product.id;
    if(product.qty==0){
      product.qty++;
      this.orderservice.sendProductToCart(product).subscribe((result) => {
        console.log("cart : ", result);
      })
      this.itemsInCart++;
    }
    else{
      alert("product is already selected");
    }
  }

  //go to orders 
  goToOrders() {
    this.router.navigate(['/orders']);
  }
}