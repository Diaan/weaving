import { Component, OnInit, ɵConsole, HostBinding } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--warp-repeats: ${this.warpRepeatCount};
       --weft-repeats: ${this.weftRepeatCount};

       --colour0: ${this.palette[0]};
       --colour1: ${this.palette[1]};
       --colour2: ${this.palette[2]};
       --colour3: ${this.palette[3]};
       --colour4: ${this.palette[4]};

       --grid-gap: ${this.repeatForm.getRawValue().gridGap}px;
       `
    );
  }

  repeatForm = new FormGroup({
    warps: new FormControl(4),
    wefts: new FormControl(4),
    warpRepeats: new FormControl(6),
    weftRepeats: new FormControl(6),
    gridGap: new FormControl(1)
  });

  weftColours = [];
  warpColours = [];

  pattern = [[0, 1], [1, 0]];
  // pattern = [[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]];

  palette = [
    '#EFBC9B',
    '#EE92C2',
    '#9D6A89',
    '#725D68',
    '#A8B4A5'
  ];

  get warpRepeatCount() {
    return this.repeatForm.getRawValue().warpRepeats;
  }

  get weftRepeatCount() {
    return this.repeatForm.getRawValue().weftRepeats;
  }

  get warpRepeats() {
    return new Array(this.repeatForm.getRawValue().warpRepeats);
  }

  get weftRepeats() {
    return new Array(this.repeatForm.getRawValue().weftRepeats);
  }

  get warps() {
    return this.repeatForm.getRawValue().warps;
  }

  get wefts() {
    return this.repeatForm.getRawValue().wefts;
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.weftColours = new Array(this.wefts).fill(0);
    this.warpColours = new Array(+this.warps).fill(1);

    this.repeatForm.valueChanges.subscribe(p => {
      if (p.warps > this.warpColours.length) {
        this.warpColours.push(1);
      }
      if (p.wefts > this.weftColours.length) {
        this.weftColours.push(0);
      }
    });
  }

  updatePalette(c) {
    this.palette = c;
  }
}
