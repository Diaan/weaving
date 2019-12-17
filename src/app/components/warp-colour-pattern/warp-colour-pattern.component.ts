import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-warp-colour-pattern',
  templateUrl: './warp-colour-pattern.component.html',
  styleUrls: ['./warp-colour-pattern.component.scss']
})
export class WarpColourPatternComponent implements OnInit {

  @Input() warpColours: number[];
  @Input() palette: string[];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getColourNumber(colour) {
    return this.sanitizer.bypassSecurityTrustStyle(
      `background-color: var(--colour${this.warpColours[colour]});`
    );
  }

  toggleColour(index) {
    const currentColor = this.warpColours[index];
    this.warpColours[index] = currentColor + 1 < this.palette.length ? currentColor + 1 : 0;
  }

}
