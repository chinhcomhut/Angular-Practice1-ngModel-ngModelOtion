import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.scss']
})
export class ViewToComponentComponent implements OnInit {
public title  = 'event biding';
public count = 0;
public username = '';
public name = '';
onClickMe(event) {
console.log(event.target.innerText);
}
  doubleClickMe(event) {
console.log(event.target.innerText);
  }
  onCrease() {
  this.count += 1;
  }
  onKeyup(event) {
  // console.log(event.target.value);
  this.username = event.target.value;
  }
  onKeyupEnter(event) {
  this.name = event.target.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
