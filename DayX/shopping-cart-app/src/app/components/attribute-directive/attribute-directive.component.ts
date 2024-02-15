import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-attribute',
    template: `
        <h1 class="text-info text-center">Attribute Directives!</h1>
        <div>
        <!-- <div [hidden]="flag"> -->
            <h3 class="blue bg-green">Hello There!</h3>
            <h3 [ngClass]="['red', 'bg-green']">Hello There!</h3>
            <h3 [ngClass]="{'blue':true, 'bg-green':false}">Hello There!</h3>
            <h3 [ngClass]="{'blue':false, 'bg-green':true}">Hello There!</h3>
            <h3 [ngClass]="{'blue':false, 'red':true, 'bg-green':true}">Hello There!</h3>
            <h3 [ngClass]="flag == false ? 'red' : 'blue'">Hello There!</h3>
            <hr />

            <h3 [ngStyle]="{'background-color':'aqua'}">Hello {{name}}!</h3>
            <h3 [ngStyle]="{'display': name ? 'block' : 'none'}">Hello {{name}}!</h3>
            <h3 [ngStyle]="{'color': name ? 'indigo' : 'green'}">Hello {{name}}!</h3>

            <hr />

            <!-- Structural Directive -->
            <!-- ng-template element defines a template that is not rendered by default -->
            <h3 *ngIf="name else elseBlock">
                Hello {{name}}!
            </h3>
            <ng-template #elseBlock>
                <h3>No name was specified!</h3>
            </ng-template>
        </div>
    `,
    styles:[`
        .blue{
            color: blue;
        }

        .red{
            color: red;
        }

        .bg-green{
            background-color: yellowgreen;
        }
    `]
})

export class AttributeDirectiveComponent implements OnInit {
    flag:boolean;
    name:string;
    constructor() {
        this.flag = true;
        this.name = 'Abhijith';
    }

    ngOnInit() { }
}