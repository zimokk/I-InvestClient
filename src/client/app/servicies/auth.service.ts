import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from "rxjs/Rx";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService implements CanActivate {
  private url = "http://localhost:8000/authorize";
  constructor(private http: Http, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot):Observable<boolean> | boolean {
    if(route.data){
      let roles = route.data["roles"] as Array<string>;
      let token = this.getToken();
      let self = this;
      if(roles){
        return this.chechToken(token).then(function (checkTokenResponse) {
          if(checkTokenResponse){
            let data = checkTokenResponse.json().data;
              if(data && data.role && data.login){
                let userRole = data.role;
                if(self.isRoleAccessAllowed(roles, userRole)){
                  return true;
                }else{
                  self.router.navigate(['/login']);
                  return false;
                }
              } else{ // checkTokenResponse.data.name && checkTokenResponse.data.message
                self.router.navigate(['/login']);
                return false; //Bad token
              }
            }
            self.router.navigate(['/login']);
            return false;
          }).catch(this.handleError);
      } else{
        return true;
      }
    } else{
      return true
    }
  }

  isRoleAccessAllowed(allowedRoles: Array<string>, userRole: string): boolean{
    if(!allowedRoles){
      return true;
    } else{
      if(userRole == 'admin'){
        return true;
      } else{
        return !!allowedRoles.find(
          function (allowedRole) {
            return allowedRole == userRole;
          });
      }
    }
  }

  getToken(): string {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODBmMmZkN2ZjOWJjYzIwNmMxMTcwNjEiLCJsb2dpbiI6ImxvZ2luMTEiLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJlbWFpbEB0dXQuYnkiLCJhZ2UiOjIxLCJzZXgiOiJtYWxlIiwiaWF0IjoxNDc3NDczNTA4LCJleHAiOjE0Nzc0NzcxMDh9.GjMbIwGujPSlnI0LE57tLKfw6rRS3MtMfGbSuw1ipCU';// localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  extractData(data){
    console.log('extract');
    console.log(data);
  }

  chechToken(token: string) {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url, JSON.stringify({token: token}), {headers: headers}).toPromise()
  }

  login():boolean {
    //request to the server
    if(response.data){
      this.setToken(response.data.token);

    } else{

    }
    return false;
  }
}
