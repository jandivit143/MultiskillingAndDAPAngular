import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shared-sharedcomptwo',
    template: `
        <h3 class="text-info text-center">
            I am a Shared Component Two from the Shared Module!
        </h3>
    `
})

export class SharedCompTwoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}