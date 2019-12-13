import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  repeatForm = new FormGroup({
    warps: new FormControl(4),
    wefts: new FormControl(4),
    warpRepeats: new FormControl(6),
    weftRepeats: new FormControl(6)
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

  ngOnInit() {
    this.weftColours = new Array(this.wefts).fill(this.palette[0]);
    this.warpColours = new Array(+this.warps).fill(this.palette[1]);

    this.repeatForm.valueChanges.subscribe(p => {
      if (p.warps > this.warpColours.length) {
        this.warpColours.push(this.palette[1]);
      }
      if (p.wefts > this.weftColours.length) {
        this.weftColours.push(this.palette[0]);
      }
    });
  }

  updatePalette(c) {
    this.palette = c;
  }
}
