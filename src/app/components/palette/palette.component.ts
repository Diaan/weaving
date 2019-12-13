import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  paletteForm = this.fb.group({
    colours: this.fb.array([
      this.fb.control('')
    ])
  });

  get colours() {
    return this.paletteForm.get('colours') as FormArray;
  }

  @Input() palette: string[];

  @Output() paletteChange = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.paletteForm.setControl('colours', this.fb.array(this.palette || []));

    this.paletteForm.valueChanges.subscribe(p => {
      console.log(p);
      this.paletteChange.emit(p.colours);
      console.log('geemit');
    });
  }

  //https://angular.io/guide/dynamic-form

  changeColour(colour, i) {
    console.log(colour, i);
    this.palette[i] = colour;
  }

}
