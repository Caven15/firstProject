import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  nom : string = "Jean"
  somme : number = 345
  dateNaissance = new Date()
  temperatureDeg = 2
  temperatureFahr = 35.60

  constructor() { }

  ngOnInit(): void {
  }

}
