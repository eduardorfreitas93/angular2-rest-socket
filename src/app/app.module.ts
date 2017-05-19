import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdAutocompleteModule, MdInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

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
    AppComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RestangularModule.forRoot(restangular),
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdInputModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
