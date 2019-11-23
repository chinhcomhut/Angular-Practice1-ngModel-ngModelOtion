import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
public name =  'chính béo';
public age = 35;
public isMaried = false;
// public user: object = {
//   ten: 'nguyễn Đồng Chính',
//   age: 36,
//   isMaried: true
// }
 public imglink = 'https://cdn.eva.vn/upload/4-2019/images/2019-11-19/8a-1574173956-248-width800height500.jpg'
// public textLink: 'Vào Đọc  Báo';
  imgWidth = 800;
 isValid = true;
 isBorder = true;
 ischeck = 0;
 isSpecial = false;
 public size = 20;
  constructor() { }

  ngOnInit() {
  }
  // showInfo() {
  // return `${this.name}`;
  // }

}
