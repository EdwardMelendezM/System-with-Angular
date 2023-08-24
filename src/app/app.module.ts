import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http"

import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {CustomPipe} from "./pipes/custom.pipe";

// hello
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    SharedModule,
    BrowserModule,

    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
