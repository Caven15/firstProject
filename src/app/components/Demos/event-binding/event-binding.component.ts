import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  private compteur

  constructor() { }

  ngOnInit(): void {
  }

  activationEvent() : void {
    this.compteur ++
    console.log("Nombre activation event = " + this.compteur)
  }
}
