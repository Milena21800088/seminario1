import { Component, OnInit } from '@angular/core';

import { ProjectsService } from 'src/app/services/projects.service';

import { Project } from 'src/app/class/project';
import { Subscription} from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

   projectSubscription: Subscription  = new Subscription
   public project = new Project();
   public projects: Project[] = [];
items: string|any[]|null|undefined;
Items: any;
Descripcion: any;

  constructor(
   private  projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    console.log("Pagina Inicio...")
  /*  this.projectSubscription = this.projectService.all$().subscribe( (items: Project[])=> {
      this.projects = items 
    })
    this.projectService.all().subscribe();*/
  }

}
