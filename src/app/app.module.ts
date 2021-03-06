import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DisplayFieldComponent } from './display-field/display-field.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    DisplayFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
