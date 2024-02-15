import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lazy-lazyone',
    template: `
        <h2 class="display-1 text-info text-center">Lazy One Component from Lazy Module!.....</h2>
    `
})

export class LazyOneComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}