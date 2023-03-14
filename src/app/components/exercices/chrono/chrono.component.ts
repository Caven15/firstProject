import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  seconde : number = 0
  minute : number = 0
  interval : any = null
  isActive : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  start() : void {
    this.isActive = !this.isActive
    this.interval = setInterval(() => {
      this.seconde++
      if (this.seconde >= 60) {
        this.minute++
        this.seconde = 0
      }
    },1000)
  }

  pause(): void{
    this.isActive = !this.isActive
    clearInterval(this.interval)
  }

  reset(): void{
    this.minute = 0
    this.seconde = 0
  }
}
