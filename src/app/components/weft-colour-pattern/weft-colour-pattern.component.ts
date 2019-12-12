import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weft-colour-pattern',
  templateUrl: './weft-colour-pattern.component.html',
  styleUrls: ['./weft-colour-pattern.component.scss']
})
export class WeftColourPatternComponent implements OnInit {

  @Input() weftColours: string[];
  @Input() palette: string[];

  constructor() { }

  ngOnInit() {
  }

  toggleColour(index){
    const currentColor = this.palette.indexOf(this.weftColours[index]);
    this.weftColours[index] = currentColor+1 < this.palette.length?this.palette[currentColor+1]:this.palette[0];
  }
}