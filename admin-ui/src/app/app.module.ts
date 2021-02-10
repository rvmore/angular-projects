import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// UI LIBRARY MODULE
import { UiLibraryModule } from 'ui-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
