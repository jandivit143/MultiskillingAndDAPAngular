import { Component } from '@angular/core';

@Component({
    selector: 'app-pagenotfound',
    template: `
        <div>
            <h1>Page not found!</h1>
            <img [src]="imgPath" alt="Page not found!" />
        </div>
    `,
    styles:[`
        div{
            text-align: center;
            margin-top: 30px;
        }
        h1{
            color: red;
            font-weight: bold;
        }
        img{
            width: 500px;
            height: 500px;
            padding: 50px;
        }
    `]
})

export class PageNotFoundComponent {
    imgPath:string = '';
    constructor() {
        this.imgPath = './assets/images/error-404.png';
    }
}