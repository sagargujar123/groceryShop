import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  itemId: any;
  products: any;
  order:any;

  constructor(private orderservice: OrdersService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.getOrderProducts();
  }

  getOrderProducts() {
    this.orderservice.getOrderItems().subscribe((result)=>{
      this.products=result;
      console.log("orders: ",result);
    });
  }

   //increase item quantity
  addItem(itemId: any) {
    for(let product of this.products){
      if(product.id===itemId){
        product.qty=product.qty + 1;
      }
    }
    console.log("added items: ",this.products)
  }

  //decrease item quantity
  decreaseItem(itemId: any) {
    for (let i=0; i<this.products.length; i++) {
      if (this.products[i].id === itemId){
        if (this.products[i].qty == 1) {
          this.orderservice.removeOrderItem(itemId).subscribe((result)=>{
            console.log("removed item: ",result);

          this.products.splice(i,1);
          console.log("remaining items: ",this.products)
        });
        }
        else {
          (this.products[i].qty)--;
          console.log("decrease item: ", this.products);
        }
      }
    }
  }

  //checkout the order
  checkOut() {
      const payload ={
        products:this.products,
      }
      
      this.orderservice.checkOutOrder(payload).subscribe((result) => {
        this.order=result;
        console.log("checkout: ",result);

        for(let itr=0; itr<this.products.length; itr++){
          this.orderservice.emptyCart(this.products[itr].id).subscribe((result)=>{
            console.log(result);
          })
        }

        this.router.navigate([`/finalorder/${this.order.id}`]);
      //   console.log("sampleId: ",this.order.id)
      // this.products.splice(0,this.products.length);
    });
    // console.log("empty cart: ",this.products);
    
  }
}