import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-one-way',
  templateUrl: './binding-one-way.component.html',
  styleUrls: ['./binding-one-way.component.scss']
})
export class BindingOneWayComponent implements OnInit {

  message : string = "Bonjour tout le mondes !!"

  constructor() { }

  ngOnInit(): void {
  }

}
