import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  @Input() warpCount: number;
  @Input() weftCount: number;
  @Input() weftColours: string[];
  @Input() warpColours: string[];
  @Input() pattern: number[][];

  get wefts() {
    return new Array(this.weftCount);
  }

  constructor() { }

  ngOnInit() {
  }

}