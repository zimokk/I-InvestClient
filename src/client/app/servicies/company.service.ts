import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import {HttpService} from "./shared/httpService";
import { Router }    from '@angular/router';

@Injectable()
export class CompaniesService extends HttpService {

  constructor(private http: Http, private router: Router){
    super("http://localhost:8000/company");
  }

  addCompany(company) {
    return this.doPost('/new',JSON.stringify({company: company}));
  }

  get(id: string){
    return this.doGet('/get/'+id,{});
  }

  getAll(){
    return this.doGet('/all',{});
  }

  update(company){
    return this.doPut('/update/'+id,JSON.stringify({company:company}));
  }

  remove(id: string){
    return this.doDelete('/delete/'+id,{});
  }
}
