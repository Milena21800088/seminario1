import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Descripcion} from '../modules/descripcion';
import { Items } from '../modules/items';

@Injectable({
  providedIn: 'root'
})
export class DescripcionService {
  post: any;

  constructor(
     private http: HttpClient
  ) {}
  load(descripcion:Items){
    return this.post('http://localhost:3000/descripcion',{data: descripcion});
    
  }
}
