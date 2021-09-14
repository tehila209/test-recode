import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafeUrlPipe } from './app.component';
import { NgAudioRecorderModule } from 'ng-audio-recorder';

@NgModule({
  declarations: [
    AppComponent, SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgAudioRecorderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
