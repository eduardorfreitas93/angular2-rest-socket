import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {RestangularModule} from 'ngx-restangular';
import {RestService} from "./services/rest.service";

export function restangular (RestangularProvider) {
  RestangularProvider.setBaseUrl('https://teste-ada2.restdb.io/rest/');
  RestangularProvider.setDefaultRequestParams({
    apikey: '5919a1e4c7f6a3e22a67101d'
  });
  RestangularProvider.setRestangularFields({
    id: "_id"
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RestangularModule.forRoot(restangular),
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
