import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from 'src/app/items/items.component';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'items', component: ItemsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
