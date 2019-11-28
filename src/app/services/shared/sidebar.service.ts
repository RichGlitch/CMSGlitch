import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [{
    title:'Home',
    icon:'mdi mdi-gauge',
    submenu:[
      {title:'Dashboard',url:'/dashboard' },
      {title:'Progress',url:'/progress' },
      {title:'Graphs',url:'/graphs1' }
    ]
  }]
  constructor() { }
}
