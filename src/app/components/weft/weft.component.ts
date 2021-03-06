import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-weft',
  templateUrl: './weft.component.html',
  styleUrls: ['./weft.component.scss']
})
export class WeftComponent implements OnInit {

  @Input() weftNumber: number;
  @Input() warpCount: number;
  @Input() pattern: number[][];
  @Input() warpColours: string[];
  @Input() weftColours: string[];

  get warps() {
    return new Array(this.warpCount);
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getColor(index) {
    const patternRow = this.pattern[this.weftNumber % this.pattern.length];
    const patternNumber = patternRow[index % patternRow.length];
    //op 1 in de pattern is de warp leidend
    const colourNumber = patternNumber === 1 ? this.warpColours[index] : this.weftColours[this.weftNumber];
    return this.sanitizer.bypassSecurityTrustStyle(
      `var(--colour${colourNumber})`
    );
  }
}
