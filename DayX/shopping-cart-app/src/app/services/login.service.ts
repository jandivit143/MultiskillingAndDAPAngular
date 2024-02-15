import { Injectable } from '@angular/core';
import { SessionStorage } from 'angular-web-storage';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  @SessionStorage()
  userName: string;
  
  // Subject
  private loginSource = new Subject<string>();
  
  // Broadcaster
  loginBroadCaster = this.loginSource.asObservable();
  
  constructor() {
    this.userName = '';
  }

  addUserName(usrNm:string){
    this.userName = usrNm;
    this.loginSource.next(this.userName);
  }

  getUserName(){
    return this.userName;
  }
}
