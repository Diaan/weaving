import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  @Input() palette: string[];

  constructor() { }

  ngOnInit() {
  }

  changeColour(colour,i) {
    console.log(colour,i);
    this.palette[i]=colour;
  }

}