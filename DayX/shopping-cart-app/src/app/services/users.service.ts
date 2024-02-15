import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string;
  constructor(private httpClient: HttpClient) {
    this.url = "https://jsonplaceholder.typicode.com/users";
  }

  getAllUsers(){
    // Making asynchronous call to the RESTFul Service / Web API
    return this.httpClient.get<Array<any>>(this.url);
  }
}


/**
 * Observable and Promises differences
 * 
 * Observable
 *  Emits multiple values over a period of time
 *  Is not called until we subscribe to the Observable
 *  Can be cancelled by using the unsubscribe() method
 *  Provides the map, forEach, filter, reducer, retra etc. operators
 * 
 * Promise
 *  Emits only a single value at a time
 *  Calls the service with .then and .catch
 *  Cannot be cancelled
 *  Doesn't provide any operators
 */