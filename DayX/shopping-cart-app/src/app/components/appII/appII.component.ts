import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-appII',
    template: `
    <h1>Simple Bootstrap Component!</h1>`,
    styles:[`
        h1{
            color: yellow;
            text-align: center;
            background-color: green;
        }
    `]
})

export class AppIIComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}