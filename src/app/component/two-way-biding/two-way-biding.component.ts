import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-biding',
  templateUrl: './two-way-biding.component.html',
  styleUrls: ['./two-way-biding.component.scss']
})
export class TwoWayBidingComponent implements OnInit {
public title = 'Two Way Biding';
public name = 'Chính Béo';
public gender = 0;
  constructor() { }

  ngOnInit() {
  }

}
