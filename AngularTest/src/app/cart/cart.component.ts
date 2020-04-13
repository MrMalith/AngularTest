import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
//to store items in the cart
  items;
  constructor(
    
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}
