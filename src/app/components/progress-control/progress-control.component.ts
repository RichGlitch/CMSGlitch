import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-progress-control',
  templateUrl: './progress-control.component.html',
  styles: []
})
export class ProgressControlComponent implements OnInit {

  @ViewChild('txtProgress', { static: true }) txtProgress: ElementRef;

  @Input() title: string='Title';
  @Input() progress: number = 50;
  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(newValue : number){
   // let elemHTML = document.getElementsByName('progress')[0];

    if (newValue == null || newValue <= 0)
      this.progress = 0;
    else if(newValue >= 100)
      this.progress = 100;
    else
      this.progress = newValue;
  
    //elemHTML.value = this.progress;

    this.txtProgress.nativeElement.value = this.progress;
    
    this.changeValue.emit(this.progress);
  }

  changeVal( value ){
    if(this.progress >= 100 && value > 0){
      this.progress = 100;
      return;
    }
    if(this.progress <= 0 && value < 0 ){
      this.progress = 0;
      return;
    }
    
    this.progress += value; 
    
    this.changeValue.emit(this.progress);
  }



}
