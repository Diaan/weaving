import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-weft-colour-pattern',
  templateUrl: './weft-colour-pattern.component.html',
  styleUrls: ['./weft-colour-pattern.component.scss']
})
export class WeftColourPatternComponent implements OnInit {

  @Input() weftColours: number[];
  @Input() palette: string[];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getColourNumber(colour) {
    return this.sanitizer.bypassSecurityTrustStyle(
      `background-color: var(--colour${this.weftColours[colour]});`
    );
  }

  toggleColour(index) {
    const currentColor = this.weftColours[index];
    this.weftColours[index] = currentColor + 1 < this.palette.length ? currentColor + 1 : 0;
  }
}
