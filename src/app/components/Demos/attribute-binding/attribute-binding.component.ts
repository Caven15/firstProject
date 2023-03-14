import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent implements OnInit {

  isOk : boolean = true
  compteur : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  activationEvent() : void {
    this.compteur ++
    console.log("Nombre activation event = " + this.compteur)
  }

  changerEtat() : void{
    this.isOk = !this.isOk
  }
}
