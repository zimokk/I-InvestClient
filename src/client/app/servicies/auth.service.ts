import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot):boolean {
    let roles = route.data["roles"] as Array<string>;
    let token = this.getToken();
    let checkTokenResponse = this.chechToken(token);
    if(checkTokenResponse.data.role && checkTokenResponse.data.login){
      let userRole = checkTokenResponse.data.role;
      return isRoleAccessAllowed(roles, userRole);
    } else{ // checkTokenResponse.data.name && checkTokenResponse.data.message
      return false; //Bad token
    }
    return false;
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
    return "fakeToken";
  }

  setToken(token: string): void {
    //set token
  }

  chechToken(token: string) {
    //request to the server with existing token
    if(response.data){

    } else{

    }
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
