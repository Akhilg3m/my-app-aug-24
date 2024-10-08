import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // create subject
  private countSubject: BehaviorSubject<number> =
    new BehaviorSubject(0);

  constructor() { }

  // set value
  setCount(value: number) {
    this.countSubject.next(value);
  }

  // get value
  getCount() {
    return this.countSubject;
  }

  // =============================================


  private cartCount = 0;
  private cartCountSubject: BehaviorSubject<number> =
    new BehaviorSubject(this.cartCount);

  addToCart() {
    this.cartCount++;
    this.cartCountSubject.next(this.cartCount);
  }

  getCartCount() {
    return this.cartCountSubject;
  }

  // =============================================
  private todos: any = [];
  private todosub: BehaviorSubject<number> =
    new BehaviorSubject(this.cartCount);

  addTodo(todo:any) {
    this.todos.push(todo);
    this.todosub.next(this.todos);
  }

  getTodos() {
    return this.todosub;
  }
}
