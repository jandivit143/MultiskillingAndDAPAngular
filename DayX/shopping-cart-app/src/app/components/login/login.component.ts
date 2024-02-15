import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    template: `
        <!-- <div>
            <h3>Login Component!</h3>
            Enter username:- <input type="text" value="{{name}}" /><br /><br />
            Enter password:- <input type="password" value="{{password}}" /><br /><br />
            <button (click)="login();">Login</button>
        </div> -->
        <!-- Make the changes by handling change event for the input type = text -->
        <!-- <div>
            <h3>Login Component!</h3>
            Enter username:- <input type="text" value="{{name}}" #inputNm (change)="updateName(inputNm.value);" /><br /><br />
            Enter password:- <input type="password" value="{{password}}" /><br /><br />
            <button (click)="login();">Login</button>
        </div> -->
        <!-- Two Way Data Binding -->
        <div>
            <h3>Login Component!</h3>
            Enter username:- <input type="text" [(ngModel)]="name" /><br /><br />
            Enter password:- <input type="password" [(ngModel)]="password" /><br /><br />
            <button (click)="login();">Login</button>
        </div>
    `,
    styles:[`
        div{
            margin: 20px;
        }
    `]
})

export class LoginComponent {
    name:string;
    password:string;
    constructor(private loginService:LoginService,
        private router:Router) {
        this.name = 'Admin';
        this.password = 'admin';
    }

    login(){
        console.log('User ' + this.name + ' logged in!');
        this.loginService.addUserName(this.name);
        // Navigate to the Products Component - This is imperative way of navigation
        this.router.navigate(['/products']);
    }

    updateName(nm:string){
        this.name = nm; // Modifying the source first and then automatically target gets updated
    }
}