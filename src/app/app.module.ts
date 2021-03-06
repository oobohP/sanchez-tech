import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/partials/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/partials/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeServicesComponent } from './public/pages/home-sections/home-services/home-services.component';
import { LocationsComponent } from './public/pages/home-sections/locations/locations.component';
import { HomeContactComponent } from './public/pages/home-sections/home-contact/home-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    routingComponents,
    HomeServicesComponent,
    LocationsComponent,
    HomeContactComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
