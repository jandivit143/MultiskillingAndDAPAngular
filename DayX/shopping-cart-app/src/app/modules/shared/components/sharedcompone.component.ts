import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shared-sharedcompone',
    template: `
        <h3 class="text-danger text-center">
            I am a Shared Component One from the Shared Module!
        </h3>
    `
})

export class SharedCompOneComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}