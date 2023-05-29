import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Items } from '../modules/items';
import { Router } from '@angular/router';
import { DescripcionService } from '../service/descripcion.service';
import { Descripcion } from '../modules/descripcion';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  
  public items: Items= new Items
  public Descripcion: Descripcion [] = []
  Items!: Items;
  constructor (
    private itemsServices:ItemsService,
    private DescripcionService: DescripcionService,
    public route: Router

  ) { }


ngOnInit() {
  this.DescripcionService.load().subscribe((res: any)=>{
    res.forEach ((elem: any) => {
      let temp = new Descripcion(elem)
      this.DescripcionService.push(temp)
    });
  })

}
onSave(){
  this.itemsServices.create(this.Items).subscribe(()=>{
    this.route.navigate(['/'])

  })
}

}
