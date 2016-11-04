import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Router }    from '@angular/router';
import { HttpService } from './shared/httpService'

@Injectable()
export class UserService extends HttpService{

  constructor(private http: Http, private router: Router){
    super("http://localhost:8000/user");
  }

  register(user){
    return this.doPost('/new',JSON.stringify({user: user}));
  }

  get(id: string){
    return this.doGet('/get/'+id,{});
  }

  getAll(){
    return this.doGet('/all',{});
  }

  getByLogin(user){
    return this.doPost('/getByLogin',JSON.stringify({user: user}))
  }

  update(user){
    return this.doPut('/update',JSON.stringify({user:user}));
  }

  remove(id: string){
    return this.doDelete('/delete/'+id,{});
  }

  ban(id: string){
    return this.doPut('/ban/'+id,{});
  }

  enable(id: string){
    return this.doPut('/enable/'+id,{});
  }
}
