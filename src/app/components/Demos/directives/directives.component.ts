import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/Utilisateur.model';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  estOuvert : boolean = true
  listeDonnee : string[] = ["Pomme", "Poire", "Banane", "Orange"]

  ListeUtilisateurs : Utilisateur[] = [
    {nom : "Alex", role : "Formateur"},
    {nom : "Meroine", role : "Stagiaire"},
    {nom : "Nicolas", role : "Stagiaire"},
    {nom : "Aymeric", role : "Stagiaire"},
    {nom : "Sébastien", role : "Stagiaire"},
    {nom : "Ferdinando", role : "Stagiaire"},
    {nom : "Rémy", role : "Stagiaire"},
    {nom : "Amandine", role : "Stagiaire"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  inversion() : void{
    this.estOuvert = !this.estOuvert
  }
}
