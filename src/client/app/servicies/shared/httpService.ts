import {Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";
export class HttpService {
  baseUrl: string;
  constructor(private baseUrl: string){
    this.baseUrl = baseUrl
  }
  returnServerError(result){
    return{
      statusCode: 500,
      err: result.json().data,
      message: result.json().message
    }
  }

  returnDisabledError(){
    return{
      statusCode: 404,
      message: "Server currently not available"
    }
  }

  returnSuccess(result){
    return{
      data: result.json().data,
      statusCode: 0
    }
  }

  doPost(prefix: string, jsonBody):Observable<boolean> | boolean {
    let self = this;
    return this.http.post(
      this.baseUrl+prefix,
      jsonBody,
      {headers: new Headers({'Content-Type': 'application/json'})})
      .toPromise()
      .then(function (result) {
        if(result.json().statusCode == 0){
          return self.returnSuccess(result);
        } else{
          return self.returnServerError(result);
        }
      },function (err) {
        self.router.navigate(['/login']);
        return self.returnDisabledError(err);
      });
  }

  doPut(prefix: string, jsonBody):Observable<boolean> | boolean {
    let self = this;
    return this.http.put(
      this.baseUrl+prefix,
      jsonBody,
      {headers: new Headers({'Content-Type': 'application/json'})})
      .toPromise()
      .then(function (result) {
        if(result.json().statusCode == 0){
          return self.returnSuccess(result);
        } else{
          return self.returnServerError(result);
        }
      },function (err) {
        self.router.navigate(['/login']);
        return self.returnDisabledError(err);
      });
  }

  doGet(prefix: string, jsonBody):Observable<boolean> | boolean {
    let self = this;
    return this.http.get(
      this.baseUrl+prefix,
      jsonBody||{},
      {headers: new Headers({'Content-Type': 'application/json'})})
      .toPromise()
      .then(function (result) {
        if(result.json().statusCode == 0){
          return self.returnSuccess(result);
        } else{
          return self.returnServerError(result);
        }
      },function (err) {
        self.router.navigate(['/login']);
        return self.returnDisabledError(err);
      });
  }

  doDelete(prefix: string, jsonBody):Observable<boolean> | boolean {
    let self = this;
    return this.http.delete(
      this.baseUrl+prefix,
      jsonBody||{},
      {headers: new Headers({'Content-Type': 'application/json'})})
      .toPromise()
      .then(function (result) {
        if(result.json().statusCode == 0){
          return self.returnSuccess(result);
        } else{
          return self.returnServerError(result);
        }
      },function (err) {
        self.router.navigate(['/login']);
        return self.returnDisabledError(err);
      });
  }
}
