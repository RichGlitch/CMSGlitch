import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  
  progressb: number = 20;
  progressg: number = 30;

  constructor() { }

  ngOnInit() {
  }
  
  // changeVal(event : number){
  //   this.progressb = event;
  // }

}
