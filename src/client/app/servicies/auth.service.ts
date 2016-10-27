import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from "rxjs/Rx";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService implements CanActivate {
  private urlPrefix = "/authorize";
  private baseUrl = "http://localhost:8000";
  private currentUser = {};
  constructor(private http: Http, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot):Observable<boolean> | boolean {
    if(route.data){
      let roles = route.data["roles"] as Array<string>;
      let token = this.getToken();
      let self = this;
      if(roles){
        return this.checkToken(token).then(function (checkTokenResponse) {
          if(checkTokenResponse){
            let data = checkTokenResponse.json().data;
              if(data && data.role && data.login){
                self.setCurrentUser(data);
                let userRole = data.role;
                if(self.isRoleAccessAllowed(roles, userRole)){
                  return true;
                }else{
                  self.logout();
                  return false;
                }
              } else{ // checkTokenResponse.data.name && checkTokenResponse.data.message
                self.logout();
                return false;
              }
            }
            self.logout();
            return false;
          }).catch(this.handleError);
      } else{
        return true;
      }
    } else{
      return true;
    }
  }

  setCurrentUser(data){
    this.currentUser.login = data.login;
    this.currentUser.role = data.role;
  }

  getCurrentUser(){

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
    let token = localStorage.getItem('token');
    return token;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  checkToken(token: string) {
    return this.http.post(
      this.baseUrl+this.urlPrefix,
      JSON.stringify({token: token}),
      {headers: new Headers({'Content-Type': 'application/json'})})
    .toPromise()
  }

  logout(){
    self.setToken(null);
    self.router.navigate(['/login']);
  }

  login(login: string, password: string):Observable<boolean> | boolean {
    let self = this;
    return this.http.post(
      self.baseUrl+this.urlPrefix,
      JSON.stringify({login: login, password: password}),
      {headers: new Headers({'Content-Type': 'application/json'})})
      .toPromise()
      .then(function (response) {
        let data = response.json().data;
        if(data){
          if(data && data.login && data.token){
            self.setToken(data.token);
            self.router.navigate(['/index']);
            return true;
          } else{
            self.setToken(null);
            return false;
          }
        } else{
          self.setToken(null);
          return false;
        }
    });
  }
}
