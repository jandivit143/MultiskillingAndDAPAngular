import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  template: `
      <!-- <h1>{{users | json}}</h1> -->
      <div class="container">
        <div class="text-center">
          <h1 class="text-primary">Users - HTTP Communication!</h1>
          <h3 class="text-danger" *ngIf="message">{{message}}</h3>
        </div>
      </div>
      <ul class="list-group" *ngIf="users; else elseBlock;">
        <li class="list-group-item" *ngFor="let user of users">{{user | json}}</li>
      </ul>
      <ng-template #elseBlock>
        {{message}}
      </ng-template>
  `,
  styles: ``
})
export class UsersComponent implements OnInit, OnDestroy{
  message:string;
  users?:Array<any>;
  get_Sub!:Subscription;
  constructor(private usersService: UsersService){
    this.message = 'Loading data, please wait!.....';
  }

  ngOnInit(): void {
      this.get_Sub = this.usersService.getAllUsers().subscribe({
        next:(resData) => {
          this.users = [...resData];
          this.message = '';
        },
        error:(err:HttpErrorResponse) => {
          this.message = err.message;
        }
      })
  }

  ngOnDestroy(): void {
    // Free all resources before component is unmounted from the DOM.
    // Unsubscribing from the observable
      this.get_Sub.unsubscribe();
  }
}
