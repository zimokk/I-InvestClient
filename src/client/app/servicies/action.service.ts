import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import {HttpService} from "./shared/httpService";
import { Router }    from '@angular/router';

@Injectable()
export class ActionsService extends HttpService {

  constructor(private http: Http, private router: Router){
    super("http://localhost:8000/action");
  }

  addCompany(action) {
    return this.doPost('/new',JSON.stringify({action: action}));
  }

  get(id: string){
    return this.doGet('/get/'+id,{});
  }

  getAll(){
    return this.doGet('/all',{});
  }

  remove(id: string){
    return this.doDelete('/delete/'+id,{});
  }
}