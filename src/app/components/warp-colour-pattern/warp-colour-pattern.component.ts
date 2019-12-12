import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warp-colour-pattern',
  templateUrl: './warp-colour-pattern.component.html',
  styleUrls: ['./warp-colour-pattern.component.scss']
})
export class WarpColourPatternComponent implements OnInit {

  @Input() warpColours: string[];
  @Input() palette: string[];

  constructor() { }

  ngOnInit() {
  }

  toggleColour(index){
    const currentColor = this.palette.indexOf(this.warpColours[index]);
    this.warpColours[index] = currentColor+1 < this.palette.length?this.palette[currentColor+1]:this.palette[0];
  }

}