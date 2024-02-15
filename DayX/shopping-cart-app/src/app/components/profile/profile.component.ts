import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-profile',
    template: `
        <div style="text-align: center;">
            <h1>In Child's Component!</h1>
            <h3>Profilename:- {{profileName}}</h3>

            <!-- Two Way Data Binding -->
            <input type="text" [(ngModel)]="profileName" />
            <br /><br />
            <button class="btn btn-info" (click)="updateName();">Update</button>
        </div>
    `
})

export class ProfileComponent {
    // string data
    profileName:string;
    // event - update
    @Output()
    update:EventEmitter<string>;
    constructor() {
        this.profileName = 'Abhijith';
        this.update = new EventEmitter<string>();
    }

    updateName(){
        // Raising update event of a ProfileComponent
        this.update.emit(this.profileName);
    }
}