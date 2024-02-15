import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hi',
    template: `
        <h1>Just to say Hi!</h1>
    `,
    styles: [`
        h1{
            color: green;
            text-align: center;
        }
    `]
})

export class HiComponent {
    constructor() {}
}