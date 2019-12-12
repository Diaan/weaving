import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  warps = 6;
  wefts = 6;

  warpRepeats = 4;
  weftRepeats = 4;

  weftColours = [];
  warpColours = [];

  pattern = [[0,1],[1,0]];
  // pattern = [[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]];

  palette = [
    '#EFBC9B',
    '#EE92C2',
    '#9D6A89',
    '#725D68',
    '#A8B4A5'
  ]

  get patternRepeats(){
    return new Array(this.warpRepeats);
  }

  ngOnInit(){
   this.weftColours = new Array(this.wefts).fill(this.palette[0]); 
   this.warpColours = new Array(this.warps).fill(this.palette[1]); 
  }

  updateWarps(value){
    this.warps = parseInt(value);
    if(this.warps>=this.warpColours.length){
      this.warpColours.push(this.palette[1]);
    }
  }

  updateWefts(value){
    this.wefts = parseInt(value);

    if(this.wefts>=this.weftColours.length){
      this.weftColours.push(this.palette[0]);
    }
  }
}
