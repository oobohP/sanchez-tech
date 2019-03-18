import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { ContactComponent } from './public/pages/contact/contact.component';
import { HomeLandingComponent } from './public/pages/home-sections/home-landing/home-landing.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: '**',
    redirectTo: '', pathMatch: 'full'
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, ContactComponent, HomeLandingComponent]