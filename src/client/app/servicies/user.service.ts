import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

@Injectable()
export class UserService {
  private urlPrefix = "/user";
  private baseUrl = "http://localhost:8000";

  constructor(private http: Http){}

  register(user) {
    return this.http.post(
      this.baseUrl+this.urlPrefix+'/new',
      JSON.stringify({user: user}),
      {headers: new Headers({'Content-Type': 'application/json'})})
    .toPromise()
    .then(function (result) {
      if(result.json().statusCode == 0){
        return {
          result: result.json().data,
          statusCode: 0
        }
      } else{
        return{
          statusCode: 500,
          err: result.json().data,
          message: result.json().message
        }
      }
    });
  }

  get(id: string){
    return this.http.get(
      this.baseUrl+this.urlPrefix+'/get/'+id,
      {},
      {headers: new Headers({'Content-Type': 'application/json'})})
    .toPromise()
    .then(function (result) {
      if(result.json().statusCode == 0){
        return {
          data: result.json().data,
          statusCode: 0
        }
      } else{
        return{
          statusCode: 500,
          err: result.json().data,
          message: result.json().message
        }
      }
    });
  }

  getAll(){
    return this.http.get(
      this.baseUrl+this.urlPrefix+'/all',
      {}
    )
    .toPromise()
    .then(function (result) {
      if(result.json().statusCode == 0){
        return {
          result: result.json().data,
          statusCode: 0
        }
      } else{
        return{
          statusCode: 500,
          err: result.json().data,
          message: result.json().message
        }
      }
    });
  }

  update(user){
    return this.http.put(
      this.baseUrl+this.urlPrefix+'/update/'+id,
      JSON.stringify({user:user}),
      {headers: new Headers({'Content-Type': 'application/json'})})
    .toPromise()
    .then(function (result) {
      if(result.json().statusCode == 0){
        return {
          result: result.json().data,
          statusCode: 0
        }
      } else{
        return{
          statusCode: 500,
          err: result.json().data,
          message: result.json().message
        }
      }
    });
  }

  remove(id: string){
    return this.http.delete(
      this.baseUrl+this.urlPrefix+'/delete/'+id,
      {}
    )
    .toPromise()
    .then(function (result) {
      if(result.json().statusCode == 0){
        return {
          result: result.json().data,
          statusCode: 0
        }
      } else{
        return{
          statusCode: 500,
          err: result.json().data,
          message: result.json().message
        }
      }
    });
  }

  ban(id: string){
    return this.http.post(
      this.baseUrl+this.urlPrefix+'/ban/'+id,
      {},
      {headers: new Headers({'Content-Type': 'application/json'})})
      .toPromise()
      .then(function (result) {
        if(result.json().statusCode == 0){
          return {
            data: result.json().data,
            statusCode: 0
          }
        } else{
          return{
            statusCode: 500,
            err: result.json().data,
            message: result.json().message
          }
        }
      });
  }
}
