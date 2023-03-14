import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-two-way',
  templateUrl: './binding-two-way.component.html',
  styleUrls: ['./binding-two-way.component.scss']
})
export class BindingTwoWayComponent implements OnInit {

  monMessage : string = "Mon message par défault"

  constructor() { }

  ngOnInit(): void {
  }

}
