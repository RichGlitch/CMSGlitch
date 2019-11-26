import { Component, OnInit, Input } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-char',
  templateUrl: './doughnut-char.component.html',
  styleUrls: ['./doughnut-char.component.css']
})
export class DoughnutCharComponent implements OnInit {
  
  @Input() labels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() data: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  @Input() type: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
