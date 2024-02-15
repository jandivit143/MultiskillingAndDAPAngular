import { Component } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrl: './demopipes.component.css'
})
export class DemopipesComponent {
  name:string;
  num:number;
  no:number;
  today:Date;
  flag:boolean;
  person:{id:number,name:string,address:{city:string,pin:number}};
  employees:Array<string>;
  by:string;
  
  constructor(){
    this.name = 'saChIn TenDUlkar';
    this.num = Math.PI;
    this.no = 0.43453;
    this.person = {id:101,name:'Rahul',address:{city:'Bengaluru',pin:534343}};
    this.today = new Date();
    this.flag = true;
    this.employees = ['Amit', 'Pramod', 'Indu', 'Swapnil', 'Imran', 'Shashank', 'Sumit', 'Abhijith',
    'Shiva', 'Rahul', 'Govind', 'Leepika', 'Kunal', 'Leela', 'Aparna', 'Narayana', 'Kaushik', 'Kishore',
    'Maneesh', 'Vishwa', 'Mahadev', 'Sandeep', 'Niranjan', 'Srinath'];
    this.by = '';
  }

  get format(){
    return this.flag && 'fullDate' || 'shortDate';
  }

  toggleFlag(){
    this.flag = !this.flag;
  }
}
