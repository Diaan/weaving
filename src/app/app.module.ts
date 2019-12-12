import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeftComponent } from '../components/weft/weft.component';
import { WorkComponent } from '../components/work/work.component';
import { PaletteComponent } from '../components/palette/palette.component'
import { PatternComponent } from '../components/pattern/pattern.component';
import { WeftColourPatternComponent } from '../components/weft-colour-pattern/weft-colour-pattern.component';
import { WarpColourPatternComponent } from '../components/warp-colour-pattern/warp-colour-pattern.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    WeftComponent, 
    WorkComponent,
    PaletteComponent,
    PatternComponent,
    WeftColourPatternComponent, 
    WarpColourPatternComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
