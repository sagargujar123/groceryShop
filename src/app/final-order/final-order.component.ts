import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-final-order',
  templateUrl: './final-order.component.html',
  styleUrls: ['./final-order.component.css']
})
export class FinalOrderComponent implements OnInit {
  finalOrder: any;
  orders: any = [];
  amount = 0;

  constructor(private orderservice: OrdersService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getFinalOrder();
  }

  getFinalOrder() {
    console.log("final id: ", this.route.snapshot.params['id']);

    this.orderservice.getFinalOrderData(this.route.snapshot.params['id']).subscribe((result) => {
      this.finalOrder = result;
      console.log("final order: ", this.finalOrder);

      this.orders = this.finalOrder.products;
      console.log("final products: ", this.orders);

      this.totalAmount(this.orders);
    });
  }

  totalAmount(order: any) {
    for (let i = 0; i < order.length; i++) {
      this.amount += this.orders[i].price * this.orders[i].qty;
    }
    console.log("amount: ", this.amount);
    return this.amount;
  }

  payment() {
    this.orders.splice(0, this.orders.length);
  }
}



