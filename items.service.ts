import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemsComponent } from '../items/items.component';
import { Descripcion } from '../modules/descripcion';
import { Items } from '../modules/items';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  

  constructor(
    private http: HttpClient
  ) { }
  load (){
    return this.http.get('http://localhost:3000/descripcion');
  }
  

  create( descripcion: Items){
     return this.http.post('http://localhost:3000/items', Descripcion );
  }
}
