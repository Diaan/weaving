import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeftComponent } from './components/weft/weft.component';
import { WorkComponent } from './components/work/work.component';
import { PaletteComponent } from './components/palette/palette.component';
import { PatternComponent } from './components/pattern/pattern.component';
import { WeftColourPatternComponent } from './components/weft-colour-pattern/weft-colour-pattern.component';
import { WarpColourPatternComponent } from './components/warp-colour-pattern/warp-colour-pattern.component';

@NgModule({
  declarations: [
    AppComponent,
    WeftComponent,
    WorkComponent,
    PaletteComponent,
    PatternComponent,
    WeftColourPatternComponent,
    WarpColourPatternComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
