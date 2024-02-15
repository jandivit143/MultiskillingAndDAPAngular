import { Component, OnInit } from '@angular/core';
import { Person } from '../../person';

@Component({
    selector: 'app-structural-directive',
    template: `
        <h1>Fruits</h1>
        <ul *ngIf="canShow">
            <li *ngFor="let fruit of fruits; index as i; first as isFirst; last as isLast; even as isEven; odd as isOdd;">
                <span>{{fruit}}</span>
                {{i}} {{isFirst}} {{isLast}} {{isEven}} {{isOdd}}
            </li>
        </ul>

        <!-- Assignment 1 - render people -->
        <h1>People</h1>
        <ul *ngIf="canShow">
        <li *ngFor="let person of people;">
                <span>{{person.name}} from {{person.city}}</span>
            </li>
        </ul>

        <!-- Assignment 2 - Try for one more structural directive ngSwitch -->
        <div [ngSwitch]="dayOfTheWeek">
            <div *ngSwitchCase=0>
                <h3>Today is Sunday! You deserve a break!</h3>
            </div>
            <div *ngSwitchCase=1>
                <h3>Today is Monday! Hope you have productive week</h3>
            </div>
            <div *ngSwitchCase=2>
                <h3>Today is Tuesday! Smash your Goals</h3>
            </div>
            <div *ngSwitchCase=3>
                <h3>Today is Wednesday! You're already half way through</h3>
            </div>
            <div *ngSwitchCase=4>
                <h3>Today is Thursday! It's like Friday Lite!</h3>
            </div>
            <div *ngSwitchCase=5>
                <h3>Today is Friday! TGIF!!!</h3>
            </div>
            <div *ngSwitchCase=6>
                <h3>Today is Saturday! Let's Party!</h3>
            </div>
            <div *ngSwitchDefault>
                <h3>Uh oh!! Something wrong!</h3>
            </div>
        </div>
    `
})

export class StructuralDirectiveComponent implements OnInit {
    fruits:string[];
    canShow:boolean;
    people:Person[];
    dayOfTheWeek: number;
    constructor() { 
        this.fruits = ['Apple', 'Mango', 'Banana', 'Grapes'];
        this.canShow = true;
        this.people = [
            {id:1, name:'Sachin', city:'Mumbai'},
            {id:2, name:'Dhoni', city:'Bangalore'},
            {id:3, name:'Virat', city:'Pune'},
            {id:4, name:'Pandya', city:'Hyderabad'},
            {id:5, name:'Rohit', city:'Delhi'},
            {id:6, name:'Shubman', city:'Hyderabad'},
            {id:7, name:'Surya', city:'Kerala'},
            {id:8, name:'Jadeja', city:'Delhi'},
            {id:9, name:'Tendulkar', city:'Mumbai'},
            {id:10, name:'Rahul', city:'Pune'},
        ];
        this.dayOfTheWeek = new Date().getDay();
    }

    ngOnInit() { }
}