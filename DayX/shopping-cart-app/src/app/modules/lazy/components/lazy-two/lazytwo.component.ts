import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lazy-lazytwo',
    template: `
        <h2 class="display-1 text-success text-center">Lazy Two Component from Lazy Module!.....</h2>
    `
})

export class LazyTwoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}