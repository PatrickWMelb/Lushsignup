import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './../environments/firebase.config';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

	AngularFireModule.initializeApp(FIREBASE_CONFIG),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
