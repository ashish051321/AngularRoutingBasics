import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { NotfoundComponent } from './notfound/notfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { App2Component } from './app2/app2.component';


@NgModule({
  declarations: [
    NotfoundComponent,
    WelcomeComponent,
    App2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App2Component]
})
export class AppModule { }
