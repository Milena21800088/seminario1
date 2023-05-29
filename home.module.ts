import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderhomeComponent } from './headerhome/headerhome.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { ItemprojectComponent } from './itemproject/itemproject.component';
import { FooterhomeComponent } from './footerhome/footerhome.component';
import { LinkprojectsComponent } from './linkprojects/linkprojects.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderhomeComponent,
    SliderComponent,
    LoginComponent,
    ItemprojectComponent,
    FooterhomeComponent,
    
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
